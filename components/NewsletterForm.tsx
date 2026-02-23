import React, { useState } from 'react';

const NewsletterForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email_address') as string;

    // 1. Construct the Payload for Kit
    const params = new URLSearchParams();
    params.append('email_address', email);
    
    // IMPORTANT: These IDs come from your HTML snippet
    params.append('form_id', '9057261'); 
    params.append('id', '9057261'); // Kit often looks for 'id' or 'form_id'
    
    // 2. Submit to Kit
    try {
      await fetch('https://app.kit.com/forms/9057261/subscriptions', {
        method: 'POST',
        body: params,
        mode: 'no-cors', // This is crucial. It tells browser to ignore CORS errors.
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      
      // Because of 'no-cors', we won't get a readable response (it will be "opaque").
      // We assume success if the network request didn't throw an error.
      setStatus('success');
      form.reset(); // Clear the input
    } catch (error) {
      console.error('Newsletter submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-8 bg-brand-accent/10 border border-brand-accent/20 rounded-xl animate-fade-in max-w-md mx-auto text-center">
         <h3 className="text-2xl font-bold text-brand-cta mb-2">Welcome to the Club!</h3>
         <p className="text-slate-300">Check your email to confirm your subscription.</p>
         <button 
           onClick={() => setStatus('idle')}
           className="mt-4 text-sm text-slate-500 hover:text-white underline"
         >
           Add another email
         </button>
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
        className="flex-1 px-5 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent/50 transition-colors shadow-inner"
      />
      
      {/* Hidden fields usually aren't needed for the API endpoint if we pass ID in URL, 
          but passing them in body handles some legacy Kit edge cases */}
      <input type="hidden" name="id" value="9057261" />

      <button 
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 bg-brand-cta text-black font-bold rounded-lg hover:bg-brand-ctaHover transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer min-w-[120px]"
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
            Sending...
          </span>
        ) : (
          'Join Free'
        )}
      </button>

      {status === 'error' && (
        <div className="absolute -bottom-12 left-0 right-0 text-center bg-red-500/10 text-red-400 text-sm py-2 px-4 rounded border border-red-500/20">
          Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
};

export default NewsletterForm;