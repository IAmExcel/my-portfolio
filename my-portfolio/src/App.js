import React, { useState } from "react";
import CybersecurityProjects from "./components/CybersecurityProjects";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const pageStyle = {
        background: darkMode ? "#1a1a1a" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        minHeight: "100vh"
    };

    const headerStyle = {
        textAlign: "center",
        padding: "1rem",
        background: darkMode ? "#000000" : "#282c34",
        color: "white"
    };

    return (
        <div style={pageStyle}>
            {/* Header Section */}
            <header style={headerStyle}>
                <h1>Cybersecurity Portfolio</h1>
                <nav>
                    <a href="#about" style={{ margin: "0 1rem", color: "white", textDecoration: "none" }}>About Me</a>
                    <a href="#education" style={{ margin: "0 1rem", color: "white", textDecoration: "none" }}>Education</a>
                    <a href="#projects" style={{ margin: "0 1rem", color: "white", textDecoration: "none" }}>Projects</a>
                    <a href="#contact" style={{ margin: "0 1rem", color: "white", textDecoration: "none" }}>Contact</a>
                </nav>
                <button onClick={() => setDarkMode(!darkMode)} style={{ marginTop: "1rem" }}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </header>

            {/* About Me Section */}
            <section id="about" style={{ padding: "2rem" }}>
                <h2>About Me</h2>
                <p>
                    I'm Eric Koch, an experienced Cybersecurity Analyst focused on safeguarding organizations against emerging threats.
                    I specialize in vulnerability assessments, penetration testing and security audits to ensure robust infrastructures.
                    My certifications include CompTIA Security+ and Microsoft Security, Compliance and Identity Fundamentals, and I'm
                    currently pursuing the ISC² Certified in Cybersecurity credential.
                </p>
            </section>

            {/* Education Section */}
            <section id="education" style={{ padding: "2rem", background: "#f4f4f4" }}>
                <h2>Education</h2>
                <h3>Manhattan College - Bachelor of Science in Computer Science (2026)</h3>
                <ul>
                    <li>Courses Taken:</li>
                    <ul>
                        <li>Computer Science I and II</li>
                        <li>Data Structures and Algorithms I and II</li>
                        <li>Database Systems I</li>
                        <li>Object-Oriented Design with Java</li>
                        <li>Systems Programming</li>
                        <li>Computer Networks</li>
                        <li>Numerical Computation</li>
                    </ul>
                    <li>In Progress:</li>
                    <ul>
                        <li>Operating Systems</li>
                        <li>Computer Organization</li>
                        <li>Cryptography & Security</li>
                    </ul>
                </ul>
            </section>

            {/* Certifications Section */}
            <section id="certifications" style={{ padding: "2rem" }}>
                <h2>Certifications</h2>
                <ul>
                    <li>CompTIA Security+</li>
                    <li>Microsoft Certified Security Compliance and Identity Fundamentals</li>
                    <li>Microsoft Certified Dynamics 365 Fundamentals (CRM)</li>
                </ul>
            </section>

            {/* Projects Section */}
            <section id="projects" style={{ padding: "2rem" }}>
                <CybersecurityProjects />
            </section>

            {/* Contact Section */}
            <section id="contact" style={{ padding: "2rem", background: "#f4f4f4" }}>
                <h2>Contact</h2>
                <p>Email: <a href="mailto:ericsaviorkoch1@gmail.com">ericsaviorkoch1@gmail.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/eric-koch0101/" target="_blank">LinkedIn Profile</a></p>
                <p>GitHub: <a href="https://github.com/IAmExcel" target="_blank">GitHub Profile</a></p>
            </section>

            {/* Footer */}
            <footer style={{ textAlign: "center", padding: "1rem", background: "#282c34", color: "white" }}>
                <p>&copy; 2024 Eric Koch</p>
            </footer>
        </div>
    );
}

export default App;
