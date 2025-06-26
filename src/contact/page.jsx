// app/contact/page.jsx
'use client';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
    reset();
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-primary py-12 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-secondary rounded-xl shadow-md max-w-md w-full p-8 flex flex-col gap-6 border border-primary"
      >
        <div className="mb-2 text-center">
          <h2 className="text-2xl font-bold text-heading mb-1">Contact Me</h2>
          <p className="text-primary text-sm">I'd love to hear from you! Fill out the form below and I'll get back to you soon.</p>
        </div>
        <input
          {...register('name')}
          placeholder="Name"
          className="w-full px-4 py-2 rounded-lg border border-primary bg-transparent text-primary focus:border-accent focus:outline-none transition-colors"
          required
        />
        <input
          {...register('email')}
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded-lg border border-primary bg-transparent text-primary focus:border-accent focus:outline-none transition-colors"
          required
        />
        <textarea
          {...register('message')}
          placeholder="Your Message"
          rows={5}
          className="w-full px-4 py-2 rounded-lg border border-primary bg-transparent text-primary focus:border-accent focus:outline-none transition-colors resize-none"
          required
        />
        <button
          type="submit"
          className="w-full bg-accent text-secondary font-bold py-2 rounded-lg hover:bg-heading transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}