import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', 
    email: '',
    number: '', 
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const formEle = e.target;
    const formData = new FormData(formEle);

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbx9qC9h-gAw1OwqTcuxwwHbjQIjU1i3qQ4QQq-IXXsvdEa9vKf-kl9EAJSK-AgGLsy7/exec',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        formEle.reset();
        setFormData({
          name: '',
          email: '',
          number: '',
          message: '',
        });
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    } catch (error) {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact me</h2>
          </div>
        </div>
        <div className="contact-container">
          <div className="lefthalf padd-15">
            <form onSubmit={handleSubmit}> 
              <div className="row">
                <div className="contact-heading padd-15">
                  <h2>Send me a message</h2>
                </div>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required="required"
                />
                <span>Name</span>
              </div>
              <div className="inputBox">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required="required"
                />
                <span>Email Address</span>
              </div>
              <div className="inputBox">
                <input
                  type="tel" 
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  required="required"
                />
                <span>Phone Number</span>
              </div>
              <div className="inputBox">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required="required"
                ></textarea>
                <span>Message</span>
              </div>
              <div className="inputBox">
                {/* <input type="submit" value="Send"/> */}
                <button className="btn">Send</button>
              </div>
            </form>
          </div>
          <div className="righthalf">
            <div className="contact-heading padd-15">
              <h2>Contact Information</h2>
              <hr />
            </div>
            <div className="centered-content">
              <div className="message-icon">
                <i className="fa-solid fa-envelope"></i> 
              </div>
              <div className="message-text">
                <p>sauravkumar77705@gmail.com</p>
              </div>
            </div>
            <ul className="lowerend">
              <a
                href="https://www.linkedin.com/in/saurav1207/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i> 
              </a>
              <a
                href="https://github.com/saurav1207"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a
                href="https://twitter.com/i__saurav__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-x-twitter"></i> 
              </a>
              <a
                href="https://www.youtube.com/channel/UCIHl2VlEkrJGf4s2G2PrMGQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-youtube"></i> 
              </a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
