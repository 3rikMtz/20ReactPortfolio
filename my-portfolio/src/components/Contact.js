import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // TODO: Handle the form submission (e.g., send an email)
      console.log('Form submitted:', form);
    }
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    // Validate name
    if (!form.name.trim()) {
      valid = false;
      errors.name = 'Name is required';
    }

    // Validate email
    if (!form.email.trim()) {
      valid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      valid = false;
      errors.email = 'Email is not valid';
    }

    // Validate message
    if (!form.message.trim()) {
      valid = false;
      errors.message = 'Message is required';
    }

    setErrors(errors);
    return valid;
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            onBlur={validateForm}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            onBlur={validateForm}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={form.message}
            onChange={handleChange}
            onBlur={validateForm}
          />
          {errors.message && <div className="error">{errors.message}</div>}
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
