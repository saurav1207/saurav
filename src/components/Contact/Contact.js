import React, { useState } from 'react';
import './Contact.css';
import CV from './Saurav Kumar.pdf';

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
    <section className="contact section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact me</h2>
          </div>
        </div>
        <div className="contact-container">
          <div className="lefthalf padd-15">
            <form >
              <div className="row">
                <div className="contact-heading padd-15">
                  <h2>Send me message</h2>
                </div>
              </div>
              <div className="inputBox">
                <input type="text" name="name" required="required" />
                <span>Name</span>
              </div>
              <div className="inputBox">
                <input type="email" name="email" required="required" />
                <span>Email Address</span>
              </div>
              <div className="inputBox">
                <input type="number" name="number" required="required" />
                <span>Phone Number</span>
              </div>
              <div className="inputBox">
                <textarea name="message" required="required"></textarea>
                <span>Message</span>
              </div>
              <div className="inputBox">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
          <div className="righthalf">
            <div className="contact-heading padd-15">
              <h2>Contact Information</h2>
            </div>
            <div className="centered-content">
              <div className="message-icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="message-text">
                <p>sauravkumar77705@gmail.com</p>
              </div>
            </div>
            <ul className="lowerend">
              <a href="https://www.linkedin.com/in/saurav1207/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/saurav1207" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a href="https://twitter.com/i__saurav__" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-square-x-twitter"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCIHl2VlEkrJGf4s2G2PrMGQ" target="_blank" rel="noopener noreferrer">
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
