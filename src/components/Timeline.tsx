import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2022 – Present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cybersecurity Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Best Value NY INC, Bronx, NY</h4>
            <p>
              Performed encryption implementations and configured firewalls to enhance network security.
              Conducted incident investigations, improved response workflows, and performed comprehensive
              security audits to ensure regulatory compliance.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 – Aug 2024"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cybersecurity Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">HeadStarter, Bronx, NY</h4>
            <p>
              Built Python-based vulnerability assessment and malware analysis tools. Conducted penetration
              testing with Metasploit and Nmap, monitored traffic, and implemented AES-based secure file
              transfers. Authored detailed mitigation reports.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 – Present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Security Researcher</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
              Conducting independent security research including vulnerability testing, threat modeling,
              and cryptographic implementations. Contributing to open-source tools and collaborating on
              penetration testing simulations and capture-the-flag (CTF) exercises.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022 – 2026"
            iconStyle={{ background: '#9C27B0', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Manhattan College, NY</h4>
            <p>
              Relevant Coursework: Cryptography & Security, Computer Networks, Operating Systems, Systems
              Programming, Database Systems, Data Structures and Algorithms.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
