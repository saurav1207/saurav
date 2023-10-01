import React from 'react';
import '../styles/Service.css';

const service = () => {
  return (
    <section id="services" className="service-section">
      <div className="container">
        <div className="service-title">My services</div>
        <div className="services-list">
        <div>
        <i class="fa-solid fa-laptop-code"></i>
          <h2>Software Engg.</h2>
          <p>Providing expert software engineering services to craft robust and scalable solutions tailored precisely to your requirements. Let's build together.</p>
          <a href="#">Learn more</a>
        </div>
        <div>
        <i className="fa-solid fa-code"></i>
          <h2>Web Develop</h2>
          <p>Offering creative web development solutions that breathe life into your online presence, captivating your audience and delivering an exceptional user experience.</p>
          <a href="#">Learn more</a>
        </div>
        <div>
        <i class="fa-solid fa-crop-simple"></i>
          <h2>Web Designing</h2>
          <p>Crafting comprehensive web design solutions that tackle complex challenges and optimize your workflow. Elevate your digital presence with our expertise.</p>
          <a href="#">Learn more</a>
        </div>
      </div>

      </div>
    </section>
  );
};

export default service;
