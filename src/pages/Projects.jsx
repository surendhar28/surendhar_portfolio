import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🔗 Blockchain-Based Supply Chain System',
    desc: 'Research paper (Primary Author) and full implementation of blockchain-based supply chain management system. Includes UI/UX design and frontend development.',
    ss: '/projects/blockchain.jpg',
    tech: ['Blockchain', 'React', 'UI/UX Design', 'Smart Contracts'],
    live: '#',
    code: 'https://github.com/surendhar28/Blockchain-Based-Supply-Chain-Management'
  },
  {
    title: '🤖 AI-driven UI Automation using Stitch',
    desc: 'Conference paper and project implementing AI-powered UI automation. Automates user interface testing and interaction using machine learning.',
    ss: '/projects/stitch.jpg',
    tech: ['AI/ML', 'Python', 'Automation', 'UI Testing'],
    live: '#',
    code: 'https://github.com/surendhar28/AI-Driven-UI-Automation'
  },
  {
    title: '🌾 AI-Powered Agriculture Chatbot',
    desc: 'Intelligent chatbot built with Botpress to assist farmers with crop recommendations, disease detection, and agricultural best practices.',
    ss: '/projects/agri-chatbot.jpg',
    tech: ['Botpress', 'NLP', 'AI', 'Conversational AI'],
    live: '#',
    code: 'https://github.com/surendhar28/AI-Powered-Agriculture-Chatbot-Deployed-on-WhatsApp-Botpress-Cloud'
  },
  {
    title: '🩺 HeartCare - Patient Management System',
    desc: 'Full-stack MERN application for managing heart disease patients. Features include patient/doctor management, appointments, prescriptions, and automatic risk assessment.',
    ss: '/projects/heartcare.jpg',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'REST API'],
    live: '#',
    code: 'https://github.com/surendhar28/Heart-disease-patient-system'
  },
  {
    title: '🌿 Plant Disease Detection',
    desc: 'Deep learning model using Keras and TensorFlow to detect and classify plant diseases from leaf images, helping farmers identify crop issues early.',
    ss: '/projects/plant-disease.jpg',
    tech: ['TensorFlow', 'Keras', 'Python', 'Computer Vision'],
    live: '#',
    code: 'https://github.com/surendhar28/Plant-Disease-Detection'
  },
  {
    title: '✍️ Blog Automation using Opal',
    desc: 'Automated blog content generation and management system using Opal. Streamlines content creation workflow with AI assistance.',
    ss: '/projects/blog-automation.jpg',
    tech: ['Opal', 'Automation', 'AI', 'Content Management'],
    live: 'https://opal.google/app/1GgfC0HpDnqjB5igIF8OT9-pRd0ckfE9I?shared',
    code: '#'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — from research papers to production-ready applications in AI, blockchain, and full-stack development.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
