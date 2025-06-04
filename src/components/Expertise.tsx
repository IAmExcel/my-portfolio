import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faLinux, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Wireshark",
    "Nmap",
    "Metasploit",
    "Kali Linux",
    "Burp Suite",
    "OpenVAS",
    "Socket Programming",
    "AES Encryption"
];

const labelsSecond = [
    "Security Audits",
    "Vulnerability Scanning",
    "Penetration Testing",
    "Incident Response",
    "Firewall Configuration",
    "SIEM Monitoring",
    "Password Hardening",
    "Malware Analysis"
];

const labelsThird = [
    "CompTIA Security+",
    "Microsoft Security Fundamentals",
    "Certified in Cybersecurity (ISC2 - In Progress)",
    "Cybersecurity Fellow @ Headstarter",
    "B.S. Computer Science (2026)",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faLinux} size="3x"/>
                    <h3>Cybersecurity Skills</h3>
                    <p>I specialize in identifying and mitigating threats using tools like Nmap, Metasploit, and Wireshark. My expertise includes vulnerability scanning, security audits, and penetration testing of live and simulated environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools & Techniques:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Security Operations</h3>
                    <p>I have experience developing custom security scripts, analyzing malware behavior, and responding to incidents with proper containment and remediation procedures.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Operations Expertise:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Certifications & Credentials</h3>
                    <p>I am currently pursuing the ISC2 Certified in Cybersecurity certification and hold multiple credentials in security and compliance. My academic foundation in Computer Science supports this hands-on experience.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Credentials:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
