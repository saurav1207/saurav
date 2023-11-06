import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
        'https://script.google.com/macros/s/AKfycbzfrCVNIWOnBB0OKN24-asnCaadnr_E2tug9sPNz8ZC27vdqgoHAaYUv6zN6MD_uEDS/exec',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        setSubmissionStatus('Form submitted successfully.');
        formEle.reset();
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
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
                  name="phone"
                  value={formData.phone}
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
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <button className="btn" disabled={isSubmitting}>
                    Send
                  </button>
                  {submissionStatus && <span id='sub-res' style={{ marginTop:'15px', marginLeft: '150px', alignItems:'center',justifyContent:'center', textAlign:'center'}}>{submissionStatus}</span>}
                </div>
              </div>
            </form>
          </div>
          <div className="righthalf">
            <div className="contact-heading padd-15">
              <h2>Contact Information</h2>
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
                href="mailto:sauravkumar77705@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-solid fa-square-envelope"></i>
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
