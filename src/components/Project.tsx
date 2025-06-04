import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">

                <div className="project">
                    <a href="https://github.com/IAmExcel/vulnerability-assessment-tool" target="_blank" rel="noreferrer">
                        <h2>Vulnerability Assessment Tool</h2>
                    </a>
                    <p>Python-based tool that automates port scanning, analyzes system configurations, and generates remediation reports.</p>
                </div>

                <div className="project">
                    <h2>Penetration Testing Simulation</h2>
                    <p>Used Nmap and Metasploit to identify and exploit vulnerabilities in a test network, followed by a formal report of findings.</p>
                </div>

                <div className="project">
                    <h2>Cybersecurity Incident Response Framework</h2>
                    <p>Developed an incident response plan during a fellowship with Headstarter, simulating response procedures for critical threats.</p>
                </div>

                <div className="project">
                    <h2>Password Strength Checker</h2>
                    <p>Created a web-based tool that evaluates passwords for complexity and provides feedback for stronger authentication practices.</p>
                </div>

                <div className="project">
                    <h2>Malware Analysis Research</h2>
                    <p>Executed malware samples in an isolated sandbox to observe behavior and documented mitigation strategies in a technical report.</p>
                </div>

                <div className="project">
                    <h2>Freelance Security Research</h2>
                    <p>Self-led research into emerging threats, with reporting and code publication for community education and awareness.</p>
                </div>

            </div>
        </div>
    );
}

export default Project;