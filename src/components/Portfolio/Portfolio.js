import React from 'react';
import './Portfolio.css';

const portfolioItems = [
  {
    id: 1,
    category: 'healthcare',
    alt: 'Healthcare Project',
    title: 'Healthcare App',
    description: 'A mobile app for managing healthcare records.',
    link: 'https://example.com/healthcare',
  },
  {
    id: 2,
    category: 'education',
    alt: 'Education Project',
    title: 'Education Platform',
    description: 'An online platform for e-learning and courses.',
    link: 'https://example.com/education',
  },
  {
    id: 3,
    category: 'github',
    alt: 'GitHub Project',
    title: 'GitHub Integration',
    description: 'Integration with GitHub for code management.',
    link: 'https://example.com/github',
  },
  {
    id: 4,
    category: 'weather',
    alt: 'Weather Project',
    title: 'Weather App',
    description: 'A weather forecasting mobile app.',
    link: 'https://example.com/weather',
  },
  {
    id: 5,
    category: 'technical',
    alt: 'Technical Project',
    title: 'Technical Blog',
    description: 'A blog platform for technical articles.',
    link: 'https://example.com/technical-blog',
  },
  {
    id: 6,
    category: 'cart',
    alt: 'Cart Project',
    title: 'Shopping Cart App',
    description: 'An e-commerce shopping cart application.',
    link: 'https://example.com/shopping-cart',
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
