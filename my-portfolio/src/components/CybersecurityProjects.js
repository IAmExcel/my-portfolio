import React, { useState } from "react";

const CybersecurityProjects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      title: "Vulnerability Assessment Tool",
      description:
        "Designed and developed a Python-based vulnerability assessment tool to analyze system configurations, identify open ports, and generate detailed security reports.",
      features: [
        "Automated open port scanning for up to 1024 ports using socket programming.",
        "Integration with system commands to check for outdated software and security vulnerabilities.",
        "Generated reports to aid in vulnerability remediation.",
      ],
    },
    {
      title: "Penetration Testing Simulation",
      description:
        "Conducted a penetration testing simulation on a test network to identify potential vulnerabilities and suggest remediations.",
      features: [
        "Used tools like Nmap and Metasploit to scan and exploit test environments.",
        "Drafted a detailed penetration testing report with actionable steps for improving security.",
      ],
    },
    {
      title: "Cybersecurity Incident Response Framework",
      description:
        "Collaborated with a team to develop a cybersecurity incident response plan during a fellowship at Headstarter.",
      features: [
        "Established protocols for identifying, responding to, and recovering from security incidents.",
        "Tested the framework using simulated incidents (e.g., phishing attacks, ransomware).",
      ],
    },
    {
      title: "Web Application Security Testing",
      description:
        "Performed security testing for a sample e-commerce platform.",
      features: [
        "Identified common vulnerabilities like SQL injection and Cross-Site Scripting (XSS).",
        "Documented findings and proposed mitigation strategies.",
      ],
    },
    {
      title: "Network Traffic Analysis Project",
      description:
        "Built a Python-based network traffic monitoring tool to detect anomalies and unauthorized access attempts.",
      features: [
        "Used Scapy to analyze incoming and outgoing packets.",
        "Highlighted potential brute force attacks and unusual traffic patterns in real-time.",
      ],
    },
    {
      title: "Secure File Transfer System",
      description:
        "Developed a secure file transfer system using Python to encrypt and decrypt sensitive data during file exchanges.",
      features: [
        "Used cryptography libraries for AES encryption.",
        "Built a user-friendly interface for secure data upload and download.",
      ],
    },
    {
      title: "Password Strength Checker",
      description:
        "Built a web-based password strength checker that evaluates the security of user-generated passwords.",
      features: [
        "Assessed passwords for length, complexity, and common patterns.",
        "Provided actionable feedback to enhance password security.",
      ],
    },
    {
      title: "Malware Analysis Research",
      description:
        "Conducted malware analysis on test samples to identify behaviors and signatures.",
      features: [
        "Set up an isolated sandbox environment to study malware execution.",
        "Generated reports detailing malware behavior and mitigation steps.",
      ],
    },
  ];

  return (
    <div>
      <h2>Cybersecurity Projects</h2>
      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3
            style={{ cursor: "pointer" }}
            onClick={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          >
            {project.title}
          </h3>
          {activeIndex === index && (
            <div>
              <p>{project.description}</p>
              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CybersecurityProjects;
