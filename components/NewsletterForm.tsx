import React, { useState } from 'react';

const NewsletterForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email_address') as string;

    // Use URLSearchParams to send data as application/x-www-form-urlencoded
    // This mimics a standard HTML form submission and is more likely to be accepted
    // by the Kit/ConvertKit endpoint than multipart/form-data sent by FormData
    const params = new URLSearchParams();
    params.append('email_address', email);

    try {
      // mode: 'no-cors' allows the request to be sent to a different domain without 
      // strict CORS headers on the server side, but returns an opaque response.
      await fetch('https://app.kit.com/forms/905726/subscriptions', {
        method: 'POST',
        body: params,
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      
      // Since we can't read the response in no-cors mode, we assume success if no network error occurred.
      // Ideally, the Kit/ConvertKit endpoint processes this correctly now that it's url-encoded.
      setStatus('success');
    } catch (error) {
      console.error('Newsletter submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-8 bg-brand-accent/10 border border-brand-accent/20 rounded-xl animate-fade-in max-w-md mx-auto">
         <h3 className="text-2xl font-bold text-brand-cta mb-2">Welcome Aboard!</h3>
         <p className="text-slate-300">Thanks for subscribing. Check your inbox for confirmation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-20">
      <input 
        type="email" 
        name="email_address"
        required
        placeholder="Enter your email" 
        className="flex-1 px-5 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent/50 transition-colors"
      />
      <button 
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 bg-brand-cta text-black font-bold rounded-lg hover:bg-brand-ctaHover transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer min-w-[120px]"
      >
        {status === 'loading' ? 'Sending...' : 'Submit'}
      </button>
      {status === 'error' && (
        <div className="absolute -bottom-10 left-0 right-0 text-center text-red-400 text-sm">
          Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
};

export default NewsletterForm;