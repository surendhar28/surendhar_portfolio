import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A comprehensive overview of my professional journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 SURENDHAR E R
            </h3>
            <p style={{ margintop: 10, fontSize: 15, color: "#ccc" }}>
              M.Tech (Integrated) in CSE | VIT-AP (in collaboration with Virtusa)
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 B.P Agraharam, Erode
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ surendharcareeer28@gmail.com
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              Motivated Computer Science student and Frontend Developer & Generative AI Engineer
              with hands-on experience building AI-powered applications in EdTech and healthcare domains.
              Skilled in React, REST/FastAPI, RAG systems, and UI/UX design, with a strong focus on
              building scalable, user-centric, and production-ready solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 16 }}>
            💼 Professional Experience
          </h4>

          {/* Experience 1 */}
          <div style={{ marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <h5 style={{ fontSize: 17, color: "#00d4ff", marginBottom: 6 }}>
              Frontend Developer & Generative AI Engineer
            </h5>
            <p style={{ color: "#aaa", fontSize: 14, marginBottom: 8 }}>
              <strong>NRITUpSkills Software Solutions PVT. Ltd.</strong> | Dec 2025 - Present
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: 20, lineHeight: 1.8, color: "#ccc", fontSize: 14 }}>
              <li>Developed AI-powered LMS features, integrating Generative AI into the learning platform</li>
              <li>Built RAG-based systems for AI question generation from text documents and video transcripts</li>
              <li>Designed multi-agent AI workflows for automated educational video generation</li>
              <li>Implemented Career Guidance & Psychometric Analysis module using retrieval-based AI</li>
              <li>Contributed to frontend development, UI integration, and performance optimization</li>
            </ul>
          </div>

          {/* Experience 2 */}
          <div style={{ marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <h5 style={{ fontSize: 17, color: "#00d4ff", marginBottom: 6 }}>
              UI/UX Designer Intern (On-site)
            </h5>
            <p style={{ color: "#aaa", fontSize: 14, marginBottom: 8 }}>
              <strong>Prayana Electric</strong> | Sep 2025 - Nov 2025
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: 20, lineHeight: 1.8, color: "#ccc", fontSize: 14 }}>
              <li>Designed web and mobile application interfaces using user-centered design approach</li>
              <li>Created wireframes, user flows, and high-fidelity UI designs using Figma, Sketch, and Canva</li>
              <li>Delivered clean, consistent, and intuitive layouts focused on usability and visual hierarchy</li>
              <li>Prepared design systems, prototypes, and assets for smooth handoff to development team</li>
            </ul>
          </div>

          {/* Experience 3 */}
          <div>
            <h5 style={{ fontSize: 17, color: "#00d4ff", marginBottom: 6 }}>
              UI/UX Intern (Remote)
            </h5>
            <p style={{ color: "#aaa", fontSize: 14, marginBottom: 8 }}>
              <strong>NOVI TECH R&D PVT LTD</strong> | Apr 2025 - May 2025
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: 20, lineHeight: 1.8, color: "#ccc", fontSize: 14 }}>
              <li>Conducted user research and requirement analysis to understand product needs</li>
              <li>Designed wireframes, low-fidelity and high-fidelity UI mockups using industry-standard tools</li>
              <li>Developed interactive prototypes to demonstrate user journeys and workflows</li>
              <li>Created modern, responsive UI layouts following design principles, color theory, and typography</li>
            </ul>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>M.Tech (Integrated) in Computer Science Engineering</strong> — VIT-AP
              (in collaboration with Virtusa), Sep 2022–Present <br />
              <span style={{ color: "#aaa" }}>CGPA: 7.86</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Higher Secondary (12th) — Computer Science</strong> — SVN Matriculation Higher Secondary School, Jun 2020–May 2022 <br />
              <span style={{ color: "#aaa" }}>Percentage: 80%</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Secondary (10th)</strong> — Nandha Matriculation Higher Secondary School, Jun 2015–May 2020 <br />
              <span style={{ color: "#aaa" }}>Percentage: 71.5%</span>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>💡 Projects & Research</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>📄 Primary Author – Research Paper on Blockchain-Based Supply Chain</li>
            <li>📄 Conference Paper & Project: AI-driven UI Automation using Stitch</li>
            <li>🤖 Project: AI-Powered Agriculture Chatbot using Botpress</li>
            <li>🌿 Project: Plant Disease Detection using Keras and TensorFlow</li>
            <li>✍️ Project: Blog Automation using Opal</li>
            <li>🩺 Project: HeartCare - Full-stack MERN Patient Management System</li>
            <li>📜 Patent: Under Publication</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Technical Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Python",
              "Java",
              "JavaScript",
              "React.js",
              "Tailwind CSS",
              "HTML/CSS",
              "FastAPI",
              "REST APIs",
              "MySQL",
              "MongoDB",
              "LLM Integration",
              "RAG Pipelines",
              "Embeddings",
              "Vector Search",
              "Prompt Engineering",
              "GitHub",
              "n8n",
              "Figma",
              "Canva",
              "Opal",
              "Jupyter Notebook",
              "Botpress",
              "Cursor",
              "Antigravity",
              "UI/UX Design",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>🏆 Certifications</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>✅ Generative AI Certificate – HCL GUVI</li>
            <li>✅ Oracle Generative AI Certificate (2025)</li>
            <li>✅ UI/UX Designer – Novi Tech Pvt Ltd</li>
            <li>✅ UX Certification – Georgia Tech University</li>
            <li>✅ Basics of Blockchain – University at Buffalo</li>
            <li>✅ Letter of Recommendation – Dr. Rajkumar Y.</li>
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "💻 GitHub", link: "https://github.com/surendhar28" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/surendhar-e-r-310919269" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/resume.pdf"
            title="Surendhar E R Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
