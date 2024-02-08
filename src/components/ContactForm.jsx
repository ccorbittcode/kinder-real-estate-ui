import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact-box">
      <form ref={form} id="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <div className="input-column">
          <label>Name</label>
          <input type="text" name="user_name" required />
        </div>
        <div className="input-column">
          <label>Email</label>
          <input type="email" name="user_email" required />
        </div>
        <div className="input-column">
          <label>Message</label>
          <textarea name="message" rows="5" required></textarea>
        </div>
        <input className="button" type="submit" value="Send" />
      </form>
    </div>
  );
};
