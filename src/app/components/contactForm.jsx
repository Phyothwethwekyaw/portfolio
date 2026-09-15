'use client';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch('https://formspree.io/f/xldnvzrr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldWrapper = 'group';
  const label =
    'block text-xs font-medium text-[#6e6e73] dark:text-[#a1a1a6] mb-1';
  const input =
    'w-full bg-transparent border-0 border-b border-[#d2d2d7] dark:border-[#3a3a3c] pb-2 text-[#1d1d1f] dark:text-[#f5f5f7] placeholder-[#86868b] focus:border-[#1d1d1f] dark:focus:border-[#f5f5f7] focus:outline-none focus:ring-0 transition-colors duration-200';

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className={fieldWrapper}>
          <label htmlFor="firstName" className={label}>First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className={input}
          />
        </div>
        <div className={fieldWrapper}>
          <label htmlFor="lastName" className={label}>Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className={input}
          />
        </div>
      </div>

      <div className={`${fieldWrapper} mt-6`}>
        <label htmlFor="email" className={label}>Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={input}
        />
      </div>

      <div className={`${fieldWrapper} mt-6`}>
        <label htmlFor="message" className={label}>Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={3}
          className={`${input} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`mt-8 px-8 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
          isSubmitting
            ? 'bg-[#d2d2d7] text-[#86868b] cursor-not-allowed'
            : 'bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-[#1d1d1f] hover:opacity-90'
        }`}
      >
        {isSubmitting ? 'Sending…' : 'Submit'}
      </button>

      {status === 'success' && (
        <p className="mt-4 text-sm text-[#6e6e73] dark:text-[#a1a1a6]">
          Thanks — your message has been sent.
        </p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
