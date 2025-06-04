import React from "react";
import '../assets/styles/Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Eric Koch. All rights reserved.</p>
                <div className="social-links">
                    <a 
                        href="https://www.linkedin.com/in/eric-koch0101" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <span> | </span>
                    <a 
                        href="https://github.com/IAmExcel" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
