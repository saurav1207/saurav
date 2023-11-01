import React from 'react';
import './Service.css';
import ServiceItem from './ServiceItem';

const servicesData = [
  {
    icon: 'fa fa-mobile-alt',
    title: 'Web Design',
    description: 'I create visually stunning websites with a focus on user experience and aesthetics. Your online presence will leave a lasting impression on your audience.',
  },
  {
    icon: 'fa fa-laptop-code',
    title: 'Web Development',
    description: 'I develop websites and applications that are both functional and responsive. Your ideas will come to life with my coding expertise.',
  },
  {
    icon: 'fa fa-palette',
    title: 'Graphic Design',
    description: 'My graphic designs are captivating and memorable, making your brand stand out. Logos, marketing materials, and more are my specialties.',
  },
  {
    icon: 'fa fa-code',
    title: 'Programming',
    description: 'I am proficient in various programming languages and frameworks, capable of creating custom solutions for your unique needs.',
  },
  {
    icon: 'fa fa-search',
    title: 'SEO',
    description: 'I optimize websites for search engines to increase online visibility and attract organic traffic. Boost your websites rankings with my expertise.',
  },
];



const Service = () => {
  return (
    <section className="service section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Services</h2>
          </div>
        </div>

        <div className="row">
          {servicesData.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
