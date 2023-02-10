import React, { useState } from 'react';
import './Footer.scss';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsSubmitted(true);
      })
  }

  return (
    <>
      <h2 className="head-text">Need <span>anything</span>? Feel free to <span>Contact</span> me!</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="Email" />
          <a href="mailto:kevnhalim@gmail.com" className="p-text">
            kevnhalim@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="LINE" />
          <a href="https://line.me/ti/p/~kvnnh" className="p-text">
            Kevin Nathanael
          </a>
        </div>
      </div>

      {!isSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Enter your name.." name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Enter your email.." name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Enter your message.."
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Your message is sent <span>successfully</span>, Thanks for reaching out!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);