import React from 'react';
import './Portfolio.css';

const portfolioItems = [
  {
    id: 1,
    category: 'healthcare',
    alt: 'Healthcare Project',
    title: 'Doc-Xpert',
    description: 'A healthcare record management web app.',
    link: 'https://doctor-patient-appointment-app.onrender.com/landing-page',
  },
  {
    id: 2,
    category: 'education',
    alt: 'Education Project',
    title: 'Eshiksha',
    description: 'An e-learning and course platform.',
    link: 'https://saurav-eshiksha.netlify.app/',
  },
  {
    id: 3,
    category: 'github',
    alt: 'GitHub Project',
    title: 'GitStare',
    description: 'GitHub user activity search using GitHub API.',
    link: 'https://saurav1207-github-user-search.netlify.app/',
  },
  {
    id: 4,
    category: 'weather',
    alt: 'Weather Project',
    title: 'Weather App',
    description: 'A web app for weather forecasting.',
    link: 'https://saurav1207-weather-application.netlify.app/',
  },
  {
    id: 5,
    category: 'technical',
    alt: 'Technical Project',
    title: 'Technical Doc. Page',
    description: 'A platform for technical articles and documentation.',
    link: 'saurav1207-technical-documentation.netlify.app',
  },
  {
    id: 6,
    category: 'cart',
    alt: 'Cart Project',
    title: 'URShop',
    description: 'An e-commerce shopping cart application.',
    link: 'https://saurav1207-urshop.netlify.app',
  },
];


const Portfolio = () => {
  return (
    <section className="portfolio section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Latest Work</h2>
          </div>
        </div>
        <div className="row">
          {portfolioItems.map((project) => (
            <div className="portfolio-item padd-15" key={project.id}>
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={`https://source.unsplash.com/300x300/?${project.category}`} alt={project.alt} />
                  <div className="layer">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
