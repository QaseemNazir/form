import React, { useState } from 'react';
import './index.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can send the form data to your backend or perform any other desired actions
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div style={{height:'300px',width:'100%'}}>
    <form style={{marginTop:'5%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',}} onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input style={{marginTop:'1%',maxWidth:'35rem'}}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" style={{marginTop:'1%'}}>Email:</label>
        <input style={{marginTop:'1%',maxWidth:'35rem'}}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" style={{marginTop:'1%'}}>Message:</label>
        <textarea  style={{marginTop:'1%',maxWidth:'35rem',}}
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <button style={{marginTop:'2rem', cursor:'pointer',marginBottom:'1%',width:'100px',background:'white',border:'2px solid lightblue',color:'lightblue'}} type="submit">Submit</button>
      </div>
    </form>

  </div>
  );
};

export default ContactForm;
