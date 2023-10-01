import React from 'react';
import '../styles/About.css'; // Import your CSS file for styling
import saurya from '../assets/saurya.jpg';

const About = () => {
  function opentab(tabname, event) {
    // Corrected the function signature to accept the event parameter
    var tablinks = document.querySelectorAll('.tab-links'); // Use querySelectorAll to select elements
    var tabcontents = document.querySelectorAll('.tab-contents'); // Use querySelectorAll to select elements

    for (var tablink of tablinks) {
      tablink.classList.remove('active-link');
    }
    for (var tabcontent of tabcontents) {
      tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
  }

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={saurya} alt="saurav-about" />
          </div>
          <div className="about-col-2">
            <h1 className="about-subtitle">About Me</h1>
            <p className='about-para'>Hello! I'm Saurav Kumar, a final-year student, web developer, and programming enthusiast. I'm dedicated, passionate about my goals, and thrive on challenges. With a strong track record of delivering high-quality work on time, I'm the one you're looking for. Feel free to reach out—I look forward to connecting with you!</p>

            <div className="tab-titles">
              <p className="tab-links active-link" onClick={(e) => opentab('skills', e)}>
                Skills
              </p>
              <p className="tab-links" onClick={(e) => opentab('experience', e)}>
                Experience
              </p>
              <p className="tab-links" onClick={(e) => opentab('education', e)}>
                Education
              </p>
            </div>
            <div className="tab-contents active-tab" id="skills">
              <ul>
                <li>
                  <span>Programming Lang.</span>
                  <br />
                  C, C++, DSA
                </li>
                <li>
                  <span>Frontend</span>
                  <br />
                  HTML5, CSS3, JS, ReactJs
                </li>
                <li>
                  <span>Backend</span>
                  <br />
                  NodeJs, Express, MongoDB, SQL
                </li>
              </ul>
            </div>
            <div className="tab-contents" id="experience">
              <ul>
                <li>
                  <span>Mar 2023 - Aug 2023</span>
                  <br />
                  ReactJs Developer At Celebal Technologies
                </li>
                <li>
                  <span>Mar 2022 - Apr 2022</span>
                  <br />
                  Full Stack Developer At Wisflux Tech Lab
                </li>
              </ul>
            </div>
            <div className="tab-contents" id="education">
              <ul>
                <li>
                  <span>2020 - Current</span>
                  <br />
                  Jaipur Engineering College & Research Centre <br />
                  91.50%
                </li>
                <li>
                  <span>2019</span>
                  <br />
                  S.P.S College, Desari, Vaishali <br />
                  79.40%

                </li>
                <li>
                  <span>2017</span>
                  <br />
                  High School Maudah <br />
                  62.40%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
