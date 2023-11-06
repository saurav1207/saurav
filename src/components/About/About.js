import React from 'react';
import './About.css';
import saurya from './saurya.png';

const About = () => {
  function opentab(tabname, event) {
    var tablinks = document.querySelectorAll('.tab-links');
    var tabcontents = document.querySelectorAll('.tab-contents');

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
    <section className="about section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15 ">
                <h3>Welcome to my world! I'm Saurav, A <span>Web Developer</span>.</h3>
                <p> A passionate final-year student pursuing B.Tech in Computer Science and Engineering at Jaipur Engineering College and Research Centre. I have a strong interest in <span>web development </span>and a deep desire to become a software engineer. I am dedicated to expanding my knowledge and skills in the field of technology and coding.</p>
              </div>
            </div>
            <div className="row">
              <div className="about-col-1 padd-15 ">
                <img src={saurya} alt="saurav-about" />
              </div>
              <div className="about-col-2 ">
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
                      <span>Programming Languages</span>
                      <br />
                      C, C++, Data Structures and Algorithms
                    </li>
                    <li>
                      <span>Frontend</span>
                      <br />
                      HTML5, CSS3, JavaScript, ReactJS
                    </li>
                    <li>
                      <span>Backend</span>
                      <br />
                      NodeJS, Express, MongoDB, SQL
                    </li>
                    <li>
                      <span>Version Control</span>
                      <br />
                      Git, GitHub
                    </li>
                  </ul>
                </div>
                <div className="tab-contents" id="experience">
                  <ul>
                    <li>
                      <span>May 2023 - Aug 2023</span>
                      <br />
                      Celebal Technologies - ReactJS Developer
                    </li>
                    <li>
                      <span>Jul 2022 - Aug 2022</span>
                      <br />
                      Wisflux Private Limited - Full Stack Developer
                    </li>
                  </ul>
                </div>
                <div className="tab-contents" id="education">
                  <ul>
                    <li>
                      <span>2020 - Current</span>
                      <br />
                      B.Tech in Computer Science and Engineering
                      <br />
                      Jaipur Engineering College & Research Centre
                      <br />
                      91.50%
                    </li>
                    <li>
                      <span>2019</span>
                      <br />
                      S.P.S College, Desari, Vaishali
                      <br />
                      79.40%
                    </li>
                    <li>
                      <span>2017</span>
                      <br />
                      High School Maudah
                      <br />
                      62.40%
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
