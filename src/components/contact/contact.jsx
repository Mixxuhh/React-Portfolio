import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, error: null });

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        "service_lr660ld", // Replace with your EmailJS service ID
        "template_4iqizev", // Replace with your EmailJS template ID
        form.current,
        "7pVSF0QJUOJazsqsC" // Replace with your EmailJS public key
      );

      if (result.text === "OK") {
        setStatus({
          submitted: true,
          submitting: false,
          error: null,
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({
        submitted: false,
        submitting: false,
        error: "There was an error submitting the form. Please try again.",
      });
    }
  };

  return (
    <section className="contact">
      <div className="contact-content">
        <h2>Get In Touch</h2>
        <p className="contact-intro">
          I'm always open to discussing new projects, job opportunities,
          creative ideas or opportunities to be part of your visions.
        </p>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-method">
              <h3>Email</h3>
              <p>wwcrase@gmail.com</p>
            </div>
            <div className="contact-method">
              <h3>Location</h3>
              <p>Salt Lake City, USA</p>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/mixxuhh"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/wilsoncrase"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} ref={form}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={status.submitting}
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </button>

            {status.submitted && (
              <p className="success-message">
                Thank you for your message! I'll get back to you soon.
              </p>
            )}

            {status.error && <p className="error-message">{status.error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
