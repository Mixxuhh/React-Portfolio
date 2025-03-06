import { useState } from "react";
import React from "react";
import "./contact.css";

// Contact Component
// const Contact = () => (
//   <section className="contact-section">
//     <h2 className="contact-header">Contact Me</h2>
//     <form className="contact-form">
//       <label className="name-box">
//         Name:
//         <input type="text" name="name" required />
//       </label>
//       <label className="email-box">
//         Email:
//         <input type="email" name="email" required />
//       </label>
//       <label className="message-box">
//         Message:
//         <textarea name="message" required></textarea>
//       </label>
//       <button className="submit-button" type="submit">
//         Submit
//       </button>
//     </form>
//   </section>
// );

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors on input
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit logic here (e.g., send data to an API or server)
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <section className="contact-section">
      <h2 className="contact-header">Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "input-error" : ""}
          ></textarea>
          {errors.message && (
            <span className="error-text">{errors.message}</span>
          )}
        </label>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
