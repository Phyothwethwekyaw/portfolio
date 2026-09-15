'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch('https://formspree.io/f/xvgopkrw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#1d1d1f] py-12 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#2c2c2e] rounded-xl shadow-md max-w-md w-full p-8 flex flex-col gap-6 border border-[#3a3a3c]"
      >
        <div className="mb-2 text-center">
          <h2 className="text-2xl font-bold text-[#f5f5f7] mb-1">Contact Me</h2>
          <p className="text-[#a1a1a6] text-sm">I'd love to hear from you! Fill out the form below and I'll get back to you soon.</p>
        </div>

        {status === 'success' && (
          <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            Thank you! Your message has been sent successfully.
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            Sorry, there was an error sending your message. Please try again.
          </div>
        )}

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full px-4 py-2 rounded-lg border border-[#3a3a3c] bg-transparent text-[#f5f5f7] focus:border-[#f5f5f7] focus:outline-none transition-colors"
          required
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-2 rounded-lg border border-[#3a3a3c] bg-transparent text-[#f5f5f7] focus:border-[#f5f5f7] focus:outline-none transition-colors"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          className="w-full px-4 py-2 rounded-lg border border-[#3a3a3c] bg-transparent text-[#f5f5f7] focus:border-[#f5f5f7] focus:outline-none transition-colors resize-none"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full font-bold py-2 rounded-lg transition-colors ${
            isSubmitting
              ? 'bg-gray-400 text-[#1d1d1f] cursor-not-allowed'
              : 'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#f5f5f7] hover:text-[#f5f5f7]'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}