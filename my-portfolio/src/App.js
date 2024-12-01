import React from "react";

function App() {
    return (
        <div>
            {/* Header Section */}
            <header style={{ textAlign: "center", padding: "1rem", background: "#282c34", color: "white" }}>
                <h1>Cybersecurity Portfolio</h1>
                <nav>
                    <a href="#about" style={{ margin: "0 1rem", color: "white", textDecoration: "none" }}>About Me</a>
                    <a href="#education" style={{ margin: "0 1rem", color: "white", textDecoration: "none" }}>Education</a>
                    <a href="#projects" style={{ margin: "0 1rem", color: "white", textDecoration: "none" }}>Projects</a>
                    <a href="#contact" style={{ margin: "0 1rem", color: "white", textDecoration: "none" }}>Contact</a>
                </nav>
            </header>

            {/* About Me Section */}
            <section id="about" style={{ padding: "2rem" }}>
                <h2>About Me</h2>
                <p>
                    Hi! I'm Eric Koch, a passionate Cybersecurity professional dedicated to protecting systems and data from emerging threats.
                    I am currently pursuing my Certified in Cybersecurity certification (ISC²) and have hands-on experience in vulnerability
                    assessments, penetration testing, and security audits. My goal is to contribute to building robust and secure infrastructures
                    while advancing my skills in ethical hacking and cybersecurity defense strategies.
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

            {/* Projects Section */}
            <section id="projects" style={{ padding: "2rem" }}>
                <h2>Cybersecurity Projects</h2>
                <ul>
                    <li>
                        <strong>Vulnerability Assessment Tool:</strong> Built a Python-based tool to automate vulnerability scanning using
                        Nmap and OpenVAS under the Headstarter Fellowship.
                    </li>
                    <li>
                        <strong>CTF Challenges:</strong> Solved Capture The Flag (CTF) challenges involving reverse engineering, web
                        exploitation, and cryptography during Headstarter Fellowship.
                    </li>
                    <li>
                        <strong>SIEM Integration:</strong> Deployed and configured a Splunk instance to monitor simulated network traffic
                        for anomalies and potential threats.
                    </li>
                    <li>
                        <strong>Encryption Algorithms:</strong> Developed and tested secure encryption algorithms as part of coursework
                        in Cryptography & Security.
                    </li>
                </ul>
            </section>

            {/* Contact Section */}
            <section id="contact" style={{ padding: "2rem", background: "#f4f4f4" }}>
                <h2>Contact</h2>
                <p>Email: <a href="mailto:ericsaviorkoch1@gmail.com">ericsaviorkoch1@gmail.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/eric-koch-6118a6262/" target="_blank">LinkedIn Profile</a></p>
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
