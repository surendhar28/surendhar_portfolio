import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const EXPERIENCES = [
    {
        id: 1,
        role: "Frontend Developer & Generative AI Engineer",
        company: "NRITUpSkills Software Solutions PVT. Ltd.",
        type: "AI / EdTech Platform",
        location: "Remote",
        duration: "Dec 2025 - Present",
        description: "Working on cutting-edge AI-powered educational technology solutions, integrating Generative AI into learning management systems.",
        responsibilities: [
            "Developed AI-powered LMS features, integrating Generative AI into the learning platform to enhance student engagement and personalized learning experiences",
            "Built RAG-based systems for AI question generation from text documents and video transcripts to ensure accurate, low-hallucination outputs for assessment creation",
            "Designed and implemented multi-agent AI workflows for automated educational video generation, streamlining content creation processes",
            "Implemented Career Guidance & Psychometric Analysis module using retrieval-based AI for personalized career recommendations based on student profiles",
            "Contributed to frontend development using React.js, focusing on UI integration, component optimization, and performance improvements",
            "Collaborated with cross-functional teams to deliver scalable EdTech solutions that serve thousands of students"
        ],
        technologies: ["React.js", "Python", "FastAPI", "RAG Systems", "LLM Integration", "Vector Search", "Embeddings", "Prompt Engineering"],
        achievements: [
            "Successfully integrated AI question generation reducing manual effort by 70%",
            "Improved platform performance by 40% through frontend optimizations",
            "Deployed multi-agent workflows serving 10,000+ students"
        ]
    },
    {
        id: 2,
        role: "UI/UX Designer Intern",
        company: "Prayana Electric",
        type: "On-site",
        location: "India",
        duration: "Sep 2025 - Nov 2025",
        description: "Focused on creating user-centered designs for web and mobile applications in the electric vehicle and energy sector.",
        responsibilities: [
            "Designed web and mobile application interfaces using a user-centered design approach, conducting user research and usability testing",
            "Created comprehensive wireframes, user flows, and high-fidelity UI designs using industry-standard tools like Figma, Sketch, and Canva",
            "Delivered clean, consistent, and intuitive layouts with strong focus on usability, visual hierarchy, and accessibility standards",
            "Prepared detailed design systems, interactive prototypes, and design assets for smooth handoff to the development team",
            "Collaborated with product managers and developers to ensure design feasibility and alignment with business goals",
            "Conducted design reviews and incorporated feedback to iterate and improve design solutions"
        ],
        technologies: ["Figma", "Sketch", "Canva", "Adobe XD", "Prototyping", "User Research", "Wireframing"],
        achievements: [
            "Created design system adopted across 5+ products",
            "Reduced design-to-development handoff time by 50%",
            "Improved user satisfaction scores by 35% through UX improvements"
        ]
    },
    {
        id: 3,
        role: "UI/UX Intern",
        company: "NOVI TECH R&D PVT LTD",
        type: "Remote",
        location: "Remote",
        duration: "Apr 2025 - May 2025",
        description: "Gained hands-on experience in UI/UX design processes, from research to final design delivery for various client projects.",
        responsibilities: [
            "Conducted comprehensive user research and requirement analysis to understand product needs and user pain points",
            "Designed wireframes, low-fidelity and high-fidelity UI mockups using industry-standard design tools and best practices",
            "Developed interactive prototypes to demonstrate user journeys, workflows, and interaction patterns for stakeholder review",
            "Created modern, responsive UI layouts following design principles, color theory, typography, and grid systems",
            "Participated in design critiques and team meetings to present design solutions and gather feedback",
            "Learned and applied design thinking methodologies to solve complex user experience challenges"
        ],
        technologies: ["Figma", "Adobe XD", "InVision", "Sketch", "User Research", "Prototyping"],
        achievements: [
            "Completed 30-day UI/UX Design MasterClass with certification",
            "Designed 10+ screens for client projects",
            "Received Letter of Recommendation for outstanding performance"
        ]
    }
];

export default function Experience() {
    return (
        <section className="container" style={{ padding: "60px 0" }}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ textAlign: "center", marginBottom: 50 }}
                >
                    <h2 style={{ fontSize: 32, color: "#00b4ff", marginBottom: 12 }}>
                        💼 Professional Experience
                    </h2>
                    <p style={{ color: "#aaa", fontSize: 16 }}>
                        My journey through AI, EdTech, and UI/UX Design
                    </p>
                </motion.div>

                {/* Experience Timeline */}
                <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                    {EXPERIENCES.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            style={{
                                marginBottom: 40,
                                background: "linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))",
                                borderRadius: 16,
                                padding: "30px 35px",
                                border: "1px solid rgba(0,180,255,0.1)",
                                boxShadow: "0 0 20px rgba(0,180,255,0.08)",
                                position: "relative",
                            }}
                        >
                            {/* Timeline Dot */}
                            <div
                                style={{
                                    position: "absolute",
                                    left: -8,
                                    top: 30,
                                    width: 16,
                                    height: 16,
                                    borderRadius: "50%",
                                    background: "linear-gradient(135deg, #00b4ff, #0ea5e9)",
                                    boxShadow: "0 0 15px rgba(0,180,255,0.6)",
                                }}
                            />

                            {/* Header */}
                            <div style={{ marginBottom: 20 }}>
                                <h3 style={{ fontSize: 22, color: "#00d4ff", marginBottom: 8 }}>
                                    {exp.role}
                                </h3>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 15, marginBottom: 10 }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#ccc" }}>
                                        <Briefcase size={16} />
                                        <strong>{exp.company}</strong>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#aaa" }}>
                                        <MapPin size={16} />
                                        {exp.location}
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#aaa" }}>
                                        <Calendar size={16} />
                                        {exp.duration}
                                    </div>
                                </div>
                                <p style={{ color: "#bbb", fontSize: 14, fontStyle: "italic" }}>
                                    {exp.description}
                                </p>
                            </div>

                            {/* Responsibilities */}
                            <div style={{ marginBottom: 20 }}>
                                <h4 style={{ fontSize: 16, color: "#00b4ff", marginBottom: 12 }}>
                                    Key Responsibilities:
                                </h4>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                    {exp.responsibilities.map((resp, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            style={{
                                                color: "#ccc",
                                                fontSize: 14,
                                                lineHeight: 1.8,
                                                marginBottom: 8,
                                                paddingLeft: 20,
                                                position: "relative",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    color: "#00b4ff",
                                                }}
                                            >
                                                ▹
                                            </span>
                                            {resp}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            <div style={{ marginBottom: 20 }}>
                                <h4 style={{ fontSize: 16, color: "#00b4ff", marginBottom: 12 }}>
                                    Technologies & Tools:
                                </h4>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                    {exp.technologies.map((tech) => (
                                        <motion.span
                                            key={tech}
                                            whileHover={{ scale: 1.05, backgroundColor: "rgba(0,180,255,0.2)" }}
                                            style={{
                                                background: "rgba(0,180,255,0.1)",
                                                border: "1px solid rgba(0,180,255,0.2)",
                                                padding: "5px 12px",
                                                borderRadius: 6,
                                                fontSize: 12,
                                                color: "#aaf",
                                            }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Achievements */}
                            <div>
                                <h4 style={{ fontSize: 16, color: "#00b4ff", marginBottom: 12 }}>
                                    Key Achievements:
                                </h4>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                    {exp.achievements.map((achievement, i) => (
                                        <li
                                            key={i}
                                            style={{
                                                color: "#0ea5e9",
                                                fontSize: 14,
                                                marginBottom: 6,
                                                paddingLeft: 20,
                                                position: "relative",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                }}
                                            >
                                                ✓
                                            </span>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: "center",
                        marginTop: 50,
                        padding: "30px",
                        background: "rgba(0,180,255,0.05)",
                        borderRadius: 12,
                        border: "1px solid rgba(0,180,255,0.1)",
                    }}
                >
                    <h3 style={{ color: "#00b4ff", marginBottom: 15 }}>
                        Interested in working together?
                    </h3>
                    <p style={{ color: "#aaa", marginBottom: 20 }}>
                        I'm always open to discussing new opportunities and collaborations.
                    </p>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: "inline-block",
                            background: "linear-gradient(90deg, #06b6d4, #0891b2)",
                            color: "#fff",
                            padding: "12px 30px",
                            borderRadius: 8,
                            textDecoration: "none",
                            fontWeight: 500,
                        }}
                    >
                        Get in Touch
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
}
