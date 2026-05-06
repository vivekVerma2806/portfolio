import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Mocking a backend delay
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact container">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-item">
            <div className="icon-box"><Mail /></div>
            <div>
              <h4>Email</h4>
              <p>vivekcse44@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon-box"><Phone /></div>
            <div>
              <h4>Phone</h4>
              <p>+91-6388653359</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon-box"><MapPin /></div>
            <div>
              <h4>Location</h4>
              <p>MMMUT, Gorakhpur, India</p>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="contact-form glass-card"
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required 
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea 
                rows="5" 
                placeholder="Your message here..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={18} style={{ marginLeft: '10px' }} />
            </button>
            
            {status === 'success' && <p className="status-msg success">Message sent successfully!</p>}
            {status === 'error' && <p className="status-msg error">Something went wrong. Try again.</p>}
          </form>
        </motion.div>
      </div>

    </section>
  );
};

export default Contact;
