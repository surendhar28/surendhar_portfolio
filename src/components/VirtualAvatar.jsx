import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../CSS/VirtualAvatar.css'

export default function VirtualAvatar() {
  const avatarRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 })
  const [headRotation, setHeadRotation] = useState({ x: 0, y: 0 })
  const [isBlinking, setIsBlinking] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [showSpeech, setShowSpeech] = useState(true)
  const [typedText, setTypedText] = useState('')

  const messages = [
    "Hey there! I am Surendhar's AI Double. Welcome! 🚀",
    "Watch my eyes and head follow your cursor. Pretty cool, right? 👀",
    "I specialize in React, Vite, Framer Motion, and Generative AI! 💻",
    "Check out my skills as interactive floating physics balls in the Skills page! ⚽",
    "Click me to toggle my expressions and hear more thoughts! 🤖",
    "Looking to build something great? Drop a message in the Contact tab! 📩"
  ]

  // Track global mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Calculate eye pupil positions and head rotation
  useEffect(() => {
    if (!avatarRef.current) return

    const rect = avatarRef.current.getBoundingClientRect()
    const avatarCenterX = rect.left + rect.width / 2
    const avatarCenterY = rect.top + rect.height / 2

    const dx = mousePos.x - avatarCenterX
    const dy = mousePos.y - avatarCenterY
    const distance = Math.sqrt(dx * dx + dy * dy)

    // Limit pupil movement
    const maxPupilOffset = 6
    const angle = Math.atan2(dy, dx)
    const factor = Math.min(distance / 100, 1) // Scale offset based on distance
    const pupilX = Math.cos(angle) * maxPupilOffset * factor
    const pupilY = Math.sin(angle) * maxPupilOffset * factor

    // Limit 3D head rotation (Perspective effect)
    const maxHeadRotationX = 12 // pitch
    const maxHeadRotationY = 15 // yaw
    const rotX = - (dy / window.innerHeight) * maxHeadRotationX
    const rotY = (dx / window.innerWidth) * maxHeadRotationY

    setPupilOffset({ x: pupilX, y: pupilY })
    setHeadRotation({ x: rotX, y: rotY })
  }, [mousePos])

  // Blinking cycle
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => {
        setIsBlinking(false)
      }, 150) // Blink duration
    }, 3500) // Blink every 3.5 seconds

    return () => clearInterval(blinkInterval)
  }, [])

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
        timer = setTimeout(type, 30) // Typing speed
      }
    }
    
    type()
    return () => clearTimeout(timer)
  }, [currentMessageIndex])

  const handleAvatarClick = () => {
    setCurrentMessageIndex((prev) => (prev + 1) % messages.length)
    setShowSpeech(true)
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

      {/* Floating Base with 3D rotation */}
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
        <div className={`avatar-glow-ring ${isHovered ? 'active' : ''}`} />

        {/* 2.5D Interactive SVG Avatar */}
        <svg
          viewBox="0 0 200 200"
          className="avatar-svg"
          style={{ transform: 'translateZ(10px)' }}
        >
          <defs>
            {/* Neon Blue Gradients */}
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0077ff" />
              <stop offset="50%" stopColor="#00e5ff" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
            <linearGradient id="hairGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0d111a" />
              <stop offset="100%" stopColor="#2c3a57" />
            </linearGradient>
            <linearGradient id="skinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffdecb" />
              <stop offset="100%" stopColor="#f7bca3" />
            </linearGradient>
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Aura */}
          <circle cx="100" cy="100" r="85" fill="rgba(0, 119, 255, 0.05)" stroke="rgba(0, 229, 255, 0.15)" strokeWidth="1" strokeDasharray="5,5" />

          {/* Body/Hoodie */}
          <path d="M 40 170 C 40 140, 60 130, 100 130 C 140 130, 160 140, 160 170 Z" fill="#0d111a" stroke="url(#neonGradient)" strokeWidth="2.5" />
          <path d="M 65 130 L 100 160 L 135 130" fill="none" stroke="rgba(0, 229, 255, 0.4)" strokeWidth="2" />
          
          {/* Neck */}
          <path d="M 85 110 L 85 135 L 115 135 L 115 110 Z" fill="#f7bca3" />
          <path d="M 85 125 C 95 135, 105 135, 115 125" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />

          {/* Head & Face */}
          <circle cx="100" cy="85" r="38" fill="url(#skinGradient)" />

          {/* Ears */}
          <circle cx="60" cy="85" r="7" fill="#f7bca3" />
          <circle cx="140" cy="85" r="7" fill="#f7bca3" />

          {/* Glowing Headphones */}
          <g filter="url(#neonGlow)">
            {/* Left Cup */}
            <rect x="52" y="72" width="10" height="24" rx="5" fill="#0077ff" />
            {/* Right Cup */}
            <rect x="138" y="72" width="10" height="24" rx="5" fill="#0077ff" />
            {/* Band */}
            <path d="M 57 74 A 45 45 0 0 1 143 74" fill="none" stroke="#00e5ff" strokeWidth="4.5" />
          </g>

          {/* Hair (Behind Face and Front Details) */}
          <path d="M 64 75 C 60 40, 140 40, 136 75 C 130 55, 70 55, 64 75 Z" fill="url(#hairGradient)" />
          {/* Fringe/Spikes */}
          <path d="M 64 72 Q 80 50 90 65 Q 105 52 115 68 Q 130 55 136 72 C 120 62, 80 62, 64 72 Z" fill="url(#hairGradient)" />

          {/* Eyes & Eyebrows */}
          <g>
            {/* Eyebrows */}
            <motion.path
              d="M 72 70 Q 82 66 90 71"
              fill="none"
              stroke="#0d111a"
              strokeWidth="2.5"
              strokeLinecap="round"
              animate={{ y: isHovered ? -3 : 0, rotate: isHovered ? -2 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.path
              d="M 128 70 Q 118 66 110 71"
              fill="none"
              stroke="#0d111a"
              strokeWidth="2.5"
              strokeLinecap="round"
              animate={{ y: isHovered ? -3 : 0, rotate: isHovered ? 2 : 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* Left Eye */}
            <rect x="74" y="73" width="16" height="12" rx="4" fill="#ffffff" />
            {/* Right Eye */}
            <rect x="110" y="73" width="16" height="12" rx="4" fill="#ffffff" />

            {/* Pupils tracking mouse */}
            <g style={{ transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`, transition: 'transform 0.05s ease-out' }}>
              {/* Left Pupil */}
              <circle cx="82" cy="79" r="4" fill="#0077ff" />
              <circle cx="83" cy="77" r="1.5" fill="#ffffff" />
              {/* Right Pupil */}
              <circle cx="118" cy="79" r="4" fill="#0077ff" />
              <circle cx="119" cy="77" r="1.5" fill="#ffffff" />
            </g>

            {/* Eyelids (Blinking Animation) */}
            <motion.rect
              x="72"
              y="71"
              width="20"
              height="16"
              fill="url(#skinGradient)"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isBlinking ? 1 : 0 }}
              transition={{ duration: 0.1 }}
              style={{ transformOrigin: 'top', display: isBlinking ? 'block' : 'none' }}
            />
            <motion.rect
              x="108"
              y="71"
              width="20"
              height="16"
              fill="url(#skinGradient)"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isBlinking ? 1 : 0 }}
              transition={{ duration: 0.1 }}
              style={{ transformOrigin: 'top', display: isBlinking ? 'block' : 'none' }}
            />
          </g>

          {/* Futuristic Glowing Glasses Frame */}
          <g filter="url(#neonGlow)" opacity="0.85">
            {/* Glasses body */}
            <rect x="68" y="70" width="28" height="18" rx="6" fill="rgba(0, 229, 255, 0.12)" stroke="#00e5ff" strokeWidth="2" />
            <rect x="104" y="70" width="28" height="18" rx="6" fill="rgba(0, 229, 255, 0.12)" stroke="#00e5ff" strokeWidth="2" />
            <line x1="96" y1="78" x2="104" y2="78" stroke="#00e5ff" strokeWidth="2" />
          </g>

          {/* Interactive Mouth */}
          <motion.path
            d={isHovered ? "M 88 102 Q 100 112 112 102" : "M 90 104 Q 100 108 110 104"}
            fill="none"
            stroke="#5e3829"
            strokeWidth="3.5"
            strokeLinecap="round"
            transition={{ duration: 0.2 }}
          />

          {/* Coding details (glowing badge on clothes) */}
          <g filter="url(#neonGlow)" transform="translate(90, 142)">
            <rect width="20" height="10" rx="3" fill="#0c101d" stroke="#0077ff" strokeWidth="1" />
            <text x="3" y="8" fill="#00e5ff" fontSize="6" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
          </g>
        </svg>

        {/* Small hint label */}
        <div className="avatar-hint">Click me!</div>
      </motion.div>
    </div>
  )
}
