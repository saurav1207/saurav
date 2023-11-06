import React from 'react';
import './Portfolio.css';

const portfolioItems = [
  {
    id: 1,
    category: 'Medical',
    title: 'Doc-Xpert',
    description: 'A healthcare management web app with various essential feature.',
    link: 'https://doctor-patient-appointment-app.onrender.com/landing-page'
  },
  {
    id: 2,
    category: 'learning',
    title: 'Eshiksha',
    description: 'An e-learning and course platform.',
    link: 'https://saurav-eshiksha.netlify.app/'
  },
  {
    id: 3,
    category: 'Git',
    title: 'GitStare',
    description: 'Explore GitHub user activities.',
    link: 'https://saurav1207-github-user-search.netlify.app/'
  },
  {
    id: 4,
    category: 'Weather',
    title: 'Weather App',
    description: 'Get weather forecasts with a web app.',
    link: 'https://saurav1207-weather-application.netlify.app/'
  },
  {
    id: 5,
    category: 'document',
    title: 'Technical Doc. Page',
    description: 'Access technical articles and documentation.',
    link: 'saurav1207-technical-documentation.netlify.app'
  },
  {
    id: 6,
    category: 'Cart',
    title: 'URShop',
    description: 'Shop online with an e-commerce cart application.',
    link: 'https://saurav1207-urshop.netlify.app'
  },
  {
    id: 7,
    category: 'digital',
    title: 'TextUtils',
    description: 'Perform various text conversions with a service.',
    link: 'https://saurav1207-textutils.netlify.app'
  },
  {
    id: 8,
    category: 'Form',
    title: 'Form Validation',
    description: 'Ensure data authenticity with form validation.',
    link: 'https://saurav1207-form-validation.netlify.app'
  },
  {
    id: 9,
    category: 'fun game',
    title: 'Tic Tac Toe',
    description: 'Enjoy a classic game of tic-tac-toe.',
    link: 'https://saurav1207-tic-tac-toe.netlify.app'
  },
  {
    id: 10,
    category: 'Order',
    title: 'Food Ordering Website',
    description: 'Order your favorite food online.',
    link: 'https://saurav1207-food-order-website.netlify.app'
  }
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
