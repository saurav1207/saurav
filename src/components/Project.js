import React from 'react';
import '../styles/Project.css';
import education from '../assets/education1.png';

const Project = () => {
  return (
    <section id="projects" className="project-section">
      <div className="container">
        <h1 className="project-subtitle">My Work</h1>
        <div className="work-list">
          <div className="work">
            <img src={education} alt="healthcare project" />
            <div className="layer">
              <h3>Doc-Xpert</h3>
              <p>
              Developed a user-friendly web app for doctor-patient appointments, including diagnosis assistance and information about government healthcare schemes
              </p>
              <a href="https://doctor-patient-appointment-app.onrender.com/landing-page">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src={education} alt="healthcare project" />
            <div className="layer">
              <h3>E-Shiksha</h3>
              <p>
              Created an educational platform with a user-friendly interface, centralizing topic-wise youtube videos for interactive and efficient learning experiences.
              </p>
              <a href="https://saurav1207-eshiksha.netlify.app/">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src={education} alt="healthcare project" />
            <div className="layer">
              <h3>GitHub-User-Search</h3>
              <p>
              Designed a user-friendly web tool for finding GitHub profiles by username, offering a comprehensive view of a user's GitHub activity
              </p>
              <a href="https://saurav1207-github-user-search.netlify.app/">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
        <a href="#" className="work-btn">
          See more
        </a>
      </div>
    </section>
  );
};

export default Project;
