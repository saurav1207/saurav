import React from 'react';
import './Service.css';
import ServiceItem from './ServiceItem';

const servicesData = [
  {
    icon: 'fa fa-mobile-alt',
    title: 'Web Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cupiditate porro eveniet!',
  },
  {
    icon: 'fa fa-laptop-code',
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cupiditate porro eveniet!',
  },
  {
    icon: 'fa fa-palette',
    title: 'Graphic Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cupiditate porro eveniet!',
  },
  {
    icon: 'fa fa-code',
    title: 'Programming',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cupiditate porro eveniet!',
  },
  {
    icon: 'fa fa-search',
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cupiditate porro eveniet!',
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
