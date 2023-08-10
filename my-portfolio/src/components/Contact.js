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

    // ... (Validation logic)

    setErrors(errors);
    return valid;
  };

  const styles = {
    section: {
      fontFamily: 'Helvetica, Arial, sans-serif',
      backgroundColor: '#759fbcff',
      padding: '20px',
      color: '#463730ff',
    },
    h2: {
      textAlign: 'center',
      borderBottom: `2px solid #463730ff`,
      paddingBottom: '10px',
      marginBottom: '20px',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: `1px solid #1f5673ff`,
    },
    textarea: {
      width: '100%',
      height: '100px',
      padding: '10px',
      borderRadius: '5px',
      border: `1px solid #1f5673ff`,
    },
    button: {
      backgroundColor: '#90c3c8ff',
      color: '#463730ff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'background-color 0.3s',
    },
    error: {
      color: '#b9b8d3ff',
      fontSize: '12px',
    },
  };

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.h2}>Contact Me</h2>
      <form action="https://formsubmit.co/eri0305@hotmail.com" method="POST">
        <div className="form-group" style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            onBlur={validateForm}
            style={styles.input}
          />
          {errors.name && <div className="error" style={styles.error}>{errors.name}</div>}
        </div>
        <div className="form-group" style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            onBlur={validateForm}
            style={styles.input}
          />
          {errors.email && <div className="error" style={styles.error}>{errors.email}</div>}
        </div>
        <div className="form-group" style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>Message</label>
          <textarea
            name="message"
            id="message"
            value={form.message}
            onChange={handleChange}
            onBlur={validateForm}
            style={styles.textarea}
          />
          {errors.message && <div className="error" style={styles.error}>{errors.message}</div>}
        </div>
        <button type="submit" style={styles.button}>Send</button>
      </form>
    </section>
  );
};

export default Contact;
