import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX, Play, RotateCcw } from 'lucide-react'
import '../CSS/VirtualAvatar.css'

export default function VirtualAvatar() {
  const avatarRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [headRotation, setHeadRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [showSpeech, setShowSpeech] = useState(true)
  const [typedText, setTypedText] = useState('')
  
  // Voice & Equalizer state
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [voices, setVoices] = useState([])
  const [selectedVoiceName, setSelectedVoiceName] = useState('')
  const currentUtteranceRef = useRef(null)

  const photo = '/photo.jpg'

  const messages = [
    "Hello! I am Surendhar's virtual double, powered by built-in browser voice. Welcome to my page! 🎙️",
    "Notice how my portrait tilts in 3D to look towards your cursor. Pretty interactive, right? 👀",
    "I specialize in React, Vite, Framer Motion, and Generative AI to construct premium web interfaces. 💻",
    "My skills are interactive floating physics balls in the Skills tab. Make sure to check them out! ⚽",
    "Click on my portrait to cycle through my thoughts, or speak to me via the Contact form! 📩",
    "I was built using standard HTML5 Canvas, Web Speech synthesis, and custom React hooks! 🚀"
  ]

  // Track global mouse movement for 3D perspective tilt
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Calculate head rotation (3D tilt effect)
  useEffect(() => {
    if (!avatarRef.current) return

    const rect = avatarRef.current.getBoundingClientRect()
    const avatarCenterX = rect.left + rect.width / 2
    const avatarCenterY = rect.top + rect.height / 2

    const dx = mousePos.x - avatarCenterX
    const dy = mousePos.y - avatarCenterY
    const distance = Math.sqrt(dx * dx + dy * dy)

    // Limit 3D rotation (Perspective effect)
    const maxHeadRotationX = 12 // pitch
    const maxHeadRotationY = 15 // yaw
    const rotX = - (dy / window.innerHeight) * maxHeadRotationX
    const rotY = (dx / window.innerWidth) * maxHeadRotationY

    setHeadRotation({ x: rotX, y: rotY })
  }, [mousePos])

  // Typewriter effect for speech bubble
  useEffect(() => {
    let timer
    const message = messages[currentMessageIndex]
    setTypedText('')
    
    let i = 0
    const type = () => {
      if (i < message.length) {
        setTypedText(prev => prev + message.charAt(i))
        i++
        timer = setTimeout(type, 20) // Typing speed
      }
    }
    
    type()
    return () => clearTimeout(timer)
  }, [currentMessageIndex])

  // Load and monitor system voices
  useEffect(() => {
    const loadVoices = () => {
      if (typeof window === 'undefined' || !window.speechSynthesis) return
      const systemVoices = window.speechSynthesis.getVoices()
      // Filter English or common local voices
      const filtered = systemVoices.filter(v => v.lang.startsWith('en') || v.lang.startsWith('hi'))
      setVoices(filtered.length > 0 ? filtered : systemVoices)

      // Auto-select a voice if none is selected
      if (filtered.length > 0 && !selectedVoiceName) {
        const defaultVoice = filtered.find(v => v.default) || filtered[0]
        setSelectedVoiceName(defaultVoice.name)
      }
    }

    loadVoices()
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = loadVoices
    }

    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = null
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  // Trigger speech function
  const speakText = (text) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return

    // Stop current speaking
    window.speechSynthesis.cancel()
    setIsSpeaking(false)

    if (isMuted) return

    // Create utterance
    const cleanText = text.replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDFFF]/g, '') // remove emojis for smoother reading
    const utterance = new SpeechSynthesisUtterance(cleanText)
    
    // Assign voice
    if (selectedVoiceName) {
      const selectedVoice = voices.find(v => v.name === selectedVoiceName)
      if (selectedVoice) {
        utterance.voice = selectedVoice
      }
    }

    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)

    currentUtteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }

  // Speak when message changes (only if not muted and clicked or already speaking)
  useEffect(() => {
    // We only autotalk on mount if user clicks first, or when they transition messages
    speakText(messages[currentMessageIndex])
  }, [currentMessageIndex, selectedVoiceName, isMuted])

  const handleAvatarClick = () => {
    setCurrentMessageIndex((prev) => (prev + 1) % messages.length)
    setShowSpeech(true)
  }

  const handleReplaySpeech = (e) => {
    e.stopPropagation()
    speakText(messages[currentMessageIndex])
  }

  const handleMuteToggle = (e) => {
    e.stopPropagation()
    const nextMuted = !isMuted
    setIsMuted(nextMuted)
    if (nextMuted) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
    }
  }

  const handleVoiceChange = (e) => {
    e.stopPropagation()
    setSelectedVoiceName(e.target.value)
  }

  return (
    <div className="avatar-container" ref={avatarRef}>
      {/* Speech Bubble */}
      <AnimatePresence>
        {showSpeech && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="speech-bubble"
          >
            <p className="speech-text">{typedText}</p>
            <button className="speech-close" onClick={() => setShowSpeech(false)}>×</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating 3D Base */}
      <motion.div
        className="avatar-wrapper"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleAvatarClick}
        style={{
          transform: `perspective(600px) rotateX(${headRotation.x}deg) rotateY(${headRotation.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Glow Ring behind Avatar */}
        <div className={`avatar-glow-ring ${isHovered || isSpeaking ? 'active' : ''}`} />

        {/* Real Photo with Glowing Speaking Border */}
        <div className={`avatar-photo-frame ${isSpeaking ? 'speaking' : ''}`}>
          <img src={photo} alt="Surendhar E R" className="avatar-photo" />
        </div>

        {/* Equalizer Visualizer Row at the bottom of the photo */}
        <div className="equalizer-bar-container">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`equalizer-bar ${isSpeaking ? 'speaking' : ''}`}
            />
          ))}
        </div>

        {/* Audio click indicator hint */}
        <div className="avatar-hint">
          {isSpeaking ? "Speaking... (Click to skip)" : "Click me to talk!"}
        </div>
      </motion.div>

      {/* Voice Selection & Control Panel */}
      <div className="voice-settings-panel">
        <button
          className="voice-btn-icon"
          onClick={handleMuteToggle}
          title={isMuted ? "Unmute Voice" : "Mute Voice"}
        >
          {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>

        <button
          className="voice-btn-icon"
          onClick={handleReplaySpeech}
          title="Repeat Message"
          disabled={isMuted}
          style={{ opacity: isMuted ? 0.4 : 1 }}
        >
          <RotateCcw size={14} />
        </button>

        {voices.length > 0 && (
          <select
            className="voice-select"
            value={selectedVoiceName}
            onChange={handleVoiceChange}
            onClick={(e) => e.stopPropagation()}
            title="Select Avatar Voice"
          >
            {voices.map((v) => (
              <option key={v.name} value={v.name}>
                {v.name.replace("Microsoft", "").replace("Desktop", "").trim()}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  )
}
