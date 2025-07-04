'use client';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
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
      const response = await fetch('https://formspree.io/f/xldnvzrr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', description: '' });
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
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white dark:bg-[#232736] border border-gray-200 dark:border-[#2C2F48] rounded-2xl p-8 shadow-lg transition-colors duration-300"
    >
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          Sorry, there was an error sending your message. Please try again.
        </div>
      )}

      <div className="mb-6">
        <label htmlFor="name" className="block text-amber-600 dark:text-[#FFD700] text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#2C2F48] bg-gray-50 dark:bg-[#0E0E1A] text-gray-900 dark:text-[#F8F8F8] placeholder-gray-500 dark:placeholder-[#AAAAAA] focus:border-amber-500 dark:focus:border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-[#FFD700] focus:ring-opacity-20 transition-all duration-300"
          placeholder="Your name"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-amber-600 dark:text-[#FFD700] text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#2C2F48] bg-gray-50 dark:bg-[#0E0E1A] text-gray-900 dark:text-[#F8F8F8] placeholder-gray-500 dark:placeholder-[#AAAAAA] focus:border-amber-500 dark:focus:border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-[#FFD700] focus:ring-opacity-20 transition-all duration-300"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="description" className="block text-amber-600 dark:text-[#FFD700] text-sm font-medium mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#2C2F48] bg-gray-50 dark:bg-[#0E0E1A] text-gray-900 dark:text-[#F8F8F8] placeholder-gray-500 dark:placeholder-[#AAAAAA] focus:border-amber-500 dark:focus:border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-[#FFD700] focus:ring-opacity-20 transition-all duration-300 resize-none"
          placeholder="Tell me about your project or collaboration idea..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
          isSubmitting
            ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
            : 'bg-amber-500 dark:bg-[#FFD700] text-white dark:text-[#0E0E1A] hover:bg-amber-600 dark:hover:bg-[#6F42C1] hover:text-white dark:hover:text-[#F8F8F8] hover:shadow-lg hover:shadow-amber-500/20 dark:hover:shadow-[#FFD700]/20'
        }`}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {/* Social Links */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-[#2C2F48]">
        <p className="text-center text-gray-600 dark:text-[#CCCCCC] text-sm mb-4">Or connect with me on</p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:phyothwethwekyaw404@gmail.com"
            className="p-3 bg-gray-200 dark:bg-[#2C2F48] rounded-full text-amber-600 dark:text-[#FFD700] hover:bg-amber-600 dark:hover:bg-[#6F42C1] hover:text-white dark:hover:text-[#F8F8F8] transition-all duration-300"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/phyothwethwekyaw"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-[#2C2F48] rounded-full text-amber-600 dark:text-[#FFD700] hover:bg-amber-600 dark:hover:bg-[#6F42C1] hover:text-white dark:hover:text-[#F8F8F8] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://github.com/Phyothwethwekyaw"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-[#2C2F48] rounded-full text-amber-600 dark:text-[#FFD700] hover:bg-amber-600 dark:hover:bg-[#6F42C1] hover:text-white dark:hover:text-[#F8F8F8] transition-all duration-300"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;