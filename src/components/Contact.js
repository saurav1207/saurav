import React, { useState } from 'react';
import '../styles/Contact.css';
import CV from '../assets/Saurav Kumar.pdf';

const Contact = () => {
    const [submissionStatus, setSubmissionStatus] = useState('');
    const [formData, setFormData] = useState({
      Name: '',
      Email: '',
      Message: '',
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
          'https://script.google.com/macros/s/AKfycbym6e8lrTxrdsj_A-62bUMtGABeDJY9nmr8abl0xk6hTp6kQ1qfUdRI0eKV9l0LeL4/exec',
          {
            method: 'POST',
            body: formData,
          }
        );
  
        if (response.ok) {
          setSubmissionStatus('Form submitted successfully.');
          formEle.reset();
          setFormData({ 
            Name: '',
            Email: '',
            Message: '',
          });
          setTimeout(() => {
            setSubmissionStatus('');
            setIsSubmitting(false);
          }, 3000);
        } else {
          setSubmissionStatus('Form submission failed. Please try again.');
          setIsSubmitting(false);
        }
      } catch (error) {
        setSubmissionStatus('An error occurred while submitting the form.');
        setIsSubmitting(false);
      }
    };

  return (
    <section id="contact" className="contact-container">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="contact-subtitle">Contact Me</h1>
            <p><i className="fa-solid fa-phone"></i> +91 8340616725</p>
            <p><i className="fa-solid fa-envelope"></i>sauravkumar77705@gmail.com</p>
            <p><i className="fa-solid fa-location-dot"></i>Shri Ram ki Nangal via RIICO, Tonk Rd, Sitapura, Jaipur, Rajasthan 302022 </p>
            <div className="social-icons">
              <a href=""><i class="fa-brands fa-linkedin"></i></a>
              <a href=""><i class="fa-brands fa-github"></i></a>
              <a href=""><i class="fa-brands fa-youtube"></i></a>
              <a href=""><i class="fa-brands fa-twitter"></i></a>
            </div>
            <a href={CV} download className="contact-btn con-btn">Download CV</a>
          </div>
          <div className="contact-right">
            <form className='form' onSubmit={handleSubmit}>
              <input type="text" name="Name" placeholder="Your name" required value={formData.Name} onChange={handleInputChange} disabled={isSubmitting} />
              <input type="email" name="Email" placeholder="Your email" required value={formData.Email} onChange={handleInputChange} disabled={isSubmitting} />
              <textarea name="Message" rows="5" placeholder="Your message" required  value={formData.Message} onChange={handleInputChange} disabled={isSubmitting} ></textarea>
              <button type="submit" className="contact-btn con-btn" disabled={isSubmitting}>Submit</button>
            </form>
            {submissionStatus && (
              <span id='sub-res'>{submissionStatus}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
