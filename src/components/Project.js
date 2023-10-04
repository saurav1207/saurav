import React from 'react';
import '../styles/Project.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import education from '../assets/education1.png';

const projects = [
  {
    title: 'DOC-XPERT',
    image: education, 
    description: 'Doc-Xpert is a user-friendly web application designed to facilitate doctor-patient appointments with added diagnosis assistance. It also provides valuable information about government healthcare schemes, ensuring a comprehensive healthcare experience.',
    link: 'https://doctor-patient-appointment-app.onrender.com/landing-page',
  },
  {
    title: 'E-SHIKSHA',
    image: education, 
    description: 'E-Shiksha is an educational platform featuring a user-friendly interface that centralizes topic-wise YouTube videos for interactive and efficient learning experiences. Enhance your educational journey with E-Shiksha.',
    link: 'https://saurav1207-eshiksha.netlify.app/',
  },
  {
    title: 'GITHUB-USER-SEARCH',
    image: education, 
    description: 'GitHub-User-Search is a user-friendly web tool designed for seamlessly finding GitHub profiles by username. It offers a comprehensive view of a users GitHub activity, making it easier than ever to connect and collaborate.',
    link: 'https://saurav1207-github-user-search.netlify.app/',
  },
  {
    title: 'WEATHER-APP',
    image: education, 
    description: 'WeatherApp is a meticulously crafted weather application that delivers real-time weather updates for locations across the globe. With an intuitive interface, users can effortlessly search for any city or region and access comprehensive weather data. Stay informed and plan your day with ease.',
    link: 'https://saurav1207-weather-application.netlify.app/',
  },
  {
    title: 'FORM-VALIDATION-APP', 
    image: education, 
    description: 'Form-Validation is a sophisticated solution for enhancing user input experiences. This project implements robust form validation techniques, ensuring that user-submitted data, including names and emails, meets high standards of accuracy and completeness.',
    link: 'https://saurav1207-form-validation.netlify.app/',
  },
  {
    title: 'E-CART-APP',
    image: education, 
    description: 'E-Cart is a ReactJS prototype showcasing my learning journey. It simulates an e-commerce platform, featuring API integration and structured design. With a fully functional cart section, you can add and remove items, calculate real-time prices, make purchases, and enjoy a seamless shopping experience.',
    link: 'https://saurav1207-cart-app.netlify.app/',
  },
  {
    title: 'TEXT-UTILS',
    image: education, 
    description: 'Text-Utils is a project I created to learn HTML, CSS, JS. It offers a variety of useful functions, including letter conversions (capitalization, lowercase, camel case), clipboard management, text removal, and word and sentence counting. Simplify your text editing tasks and boost productivity with Text-Utils.',
    link: 'https://saurav1207-textutils.netlify.app/',
  },
  {
    title: 'TO-DO LIST',
    image: education, 
    description: 'My To-Do is not only a project I created to learn CRUD (Create, Read, Update, Delete) operations using JavaScript, but it is also a valuable tool for efficient task management. Discover the power of organized task handling with My To-Do.',
    link: 'https://saurav1207-todo-list.netlify.app/',
  },
  {
    title: 'TIC-TAC-TOE',
    image: education, 
    description: 'Tic-Tac-Toe is a delightful project, perfect for those with a basic understanding of JavaScript. Whether you are in the mood for a quick brain-teaser or a thrilling strategic showdown, this game promises hours of enjoyment.',
    link: 'https://saurav1207-tic-tac-toe.netlify.app/',
  },
];

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="projects" className="project-section">
      <div className="container">
        <h1 className="project-subtitle">My Work</h1>
        <div className="work-list">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div className="work" key={index}>
                <img src={project.image} alt={project.title} />
                <div className="layer">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link}>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Project;
