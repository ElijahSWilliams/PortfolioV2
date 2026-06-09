import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_649rxkg",
        "template_uk1t98b",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "7cLF-__xOxAdeOZ_d"
      )
      .then(() => {
        alert("Sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Send Failed!");
      });
  };

  return (
    <section className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Contact Me</h2>

        <form className="contact__form" onSubmit={handleSubmit}>
          
          <div className="contact__field">
            <label className="contact__label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="contact__input"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="contact__field">
            <label className="contact__label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="contact__input"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="contact__field">
            <label className="contact__label">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="contact__textarea"
              placeholder="Your Message"
              rows="3"
              required
            />
          </div>

          <button type="submit" className="contact__button">
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;