import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX, RotateCcw } from 'lucide-react'
import '../CSS/VirtualAvatar.css'

export default function VirtualAvatar() {
  const avatarRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [headRotation, setHeadRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [showSpeech, setShowSpeech] = useState(true)
  
  // Voice, captions, & animations state
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentWordIndex, setCurrentWordIndex] = useState(-1)
  const [voices, setVoices] = useState([])
  const [selectedVoiceName, setSelectedVoiceName] = useState('')
  const currentUtteranceRef = useRef(null)

  const photo = '/photo.jpg'
  const totalEqualizerBars = 32

  const messages = [
    "Hello! I am Surendhar's virtual double. Welcome to my digital workspace! 🎙️",
    "Notice how my portrait tilts to follow your cursor movement around the screen. 👀",
    "I specialize in building rich web experiences using React, Vite, and Generative AI. 💻",
    "Make sure to check out the Skills page to see my interactive floating skills network! ⚽",
    "Click on my photo at any time to skip my message or check out more logs! 🤖",
    "If you want to collaborate on a new project, drop me a line in the Contact tab! 📩"
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

  // Trigger speech function with boundary tracking (karaoke captions)
  const speakText = (text) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return

    // Stop current speaking
    window.speechSynthesis.cancel()
    setIsSpeaking(false)
    setCurrentWordIndex(-1)

    if (isMuted) return

    // Create utterance
    const cleanText = text.replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDFFF]/g, '')
    const utterance = new SpeechSynthesisUtterance(cleanText)
    
    // Assign voice
    if (selectedVoiceName) {
      const selectedVoice = voices.find(v => v.name === selectedVoiceName)
      if (selectedVoice) {
        utterance.voice = selectedVoice
      }
    }

    utterance.onstart = () => {
      setIsSpeaking(true)
      setCurrentWordIndex(0)
    }

    // Word boundary tracking for captions
    utterance.onboundary = (event) => {
      if (event.name === 'word') {
        const charIndex = event.charIndex
        const textBeforeBoundary = event.target.text.substring(0, charIndex)
        // Count words spoken so far
        const wordCount = textBeforeBoundary.trim().split(/\s+/).filter(Boolean).length
        setCurrentWordIndex(wordCount)
      }
    }

    utterance.onend = () => {
      setIsSpeaking(false)
      setCurrentWordIndex(-1)
    }

    utterance.onerror = () => {
      setIsSpeaking(false)
      setCurrentWordIndex(-1)
    }

    currentUtteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }

  // Speak when message/voice changes
  useEffect(() => {
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
      setCurrentWordIndex(-1)
    }
  }

  const handleVoiceChange = (e) => {
    e.stopPropagation()
    setSelectedVoiceName(e.target.value)
  }

  // Split the current message into words for the synced caption highlighter
  const captionWords = messages[currentMessageIndex].split(' ')

  return (
    <div className="avatar-container" ref={avatarRef}>
      {/* Synchronized Captions Speech Bubble */}
      <AnimatePresence>
        {showSpeech && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="speech-bubble"
          >
            <p className="speech-text">
              {captionWords.map((word, idx) => {
                let wordClass = "caption-word"
                if (idx === currentWordIndex) {
                  wordClass += " active-word"
                } else if (idx < currentWordIndex) {
                  wordClass += " read-word"
                }
                return (
                  <span key={idx} className={wordClass}>
                    {word}
                  </span>
                )
              })}
            </p>
            <button className="speech-close" onClick={() => setShowSpeech(false)}>×</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating 3D base frame */}
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

        {/* Concentric Speech Ripple Rings */}
        <div className={`ripple-ring ${isSpeaking ? 'speaking' : ''}`} />
        <div className={`ripple-ring ${isSpeaking ? 'speaking' : ''}`} />
        <div className={`ripple-ring ${isSpeaking ? 'speaking' : ''}`} />

        {/* Real Photo Card with Glowing Speaking Border */}
        <div className={`avatar-photo-frame ${isSpeaking ? 'speaking' : ''}`}>
          <img src={photo} alt="Surendhar E R" className="avatar-photo" />
        </div>

        {/* Circular Radial Equalizer surrounding the photo */}
        <div className="radial-equalizer">
          {[...Array(totalEqualizerBars)].map((_, i) => {
            const angle = i * (360 / totalEqualizerBars)
            const delayClass = `delay-${(i % 5) + 1}`
            return (
              <div
                key={i}
                className={`radial-bar ${isSpeaking ? 'speaking' : ''} ${delayClass}`}
                style={{
                  transform: `rotate(${angle}deg) translateY(-122px)`,
                }}
              />
            )
          })}
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
