import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* Updated image source to your Eric_pfp.png in the public folder */}
          <img src={`${process.env.PUBLIC_URL}/Eric_pfp.png`} alt="Eric Koch" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/IAmExcel" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/eric-koch0101/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Eric Koch</h1>
          <p>Cybersecurity Analyst</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/IAmExcel" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/eric-koch0101/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
