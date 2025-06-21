'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // You'll need to replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'service_f0fsn6k', // Replace with your EmailJS service ID
        'template_6z8ma36', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'dasjathartha@gmail.com'
        },
        '7Ff8bgzg7Vj8xgnjq' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground px-4 sm:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-highlight to-foreground bg-clip-text text-transparent">
            Contact Me
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Let&apos;s connect! Feel free to reach out for collaborations, opportunities, or just a friendly chat.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Email Card */}
          <div className="bg-gradient-to-br from-secondary to-accent rounded-2xl p-8 shadow-xl border border-highlight/20 hover:border-highlight/40 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-highlight rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-background" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-highlight mb-2">Email</h3>
              <p className="text-gray-300 mb-4">Let&apos;s discuss your project</p>
              <a href="mailto:dasjathartha@gmail.com" className="bg-highlight text-background px-6 py-3 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all duration-300">
                dasjathartha@gmail.com
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-gradient-to-br from-secondary to-accent rounded-2xl p-8 shadow-xl border border-highlight/20 hover:border-highlight/40 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-highlight rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-background" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-highlight mb-2">Work Preferences</h3>
              <p className="text-gray-300 mb-4">Available for various work arrangements</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-highlight text-background px-3 py-1 rounded-full text-sm font-medium">In-Office (India)</span>
                <span className="bg-highlight text-background px-3 py-1 rounded-full text-sm font-medium">Hybrid (India)</span>
                <span className="bg-highlight text-background px-3 py-1 rounded-full text-sm font-medium">Remote (Worldwide)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-highlight mb-8">Connect With Me</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* GitHub */}
            <a href="https://github.com/Jathartha" target="_blank" rel="noopener noreferrer" 
               className="group bg-gradient-to-r from-secondary to-accent rounded-xl p-6 shadow-xl border border-highlight/20 hover:border-highlight/40 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-highlight rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-foreground transition-colors">
                <svg className="w-6 h-6 text-background" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-highlight group-hover:text-foreground transition-colors">GitHub</h3>
              <p className="text-gray-400 text-sm">View my code</p>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/jathartha" target="_blank" rel="noopener noreferrer" 
               className="group bg-gradient-to-r from-secondary to-accent rounded-xl p-6 shadow-xl border border-highlight/20 hover:border-highlight/40 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-highlight rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-foreground transition-colors">
                <svg className="w-6 h-6 text-background" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-highlight group-hover:text-foreground transition-colors">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Professional profile</p>
            </a>

            {/* LeetCode */}
            <a href="https://leetcode.com/u/JatharthaDas/" target="_blank" rel="noopener noreferrer" 
               className="group bg-gradient-to-r from-secondary to-accent rounded-xl p-6 shadow-xl border border-highlight/20 hover:border-highlight/40 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-highlight rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-foreground transition-colors">
                <svg className="w-6 h-6 text-background" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.653 1.653 0 0 0 0 2.227 1.653 1.653 0 0 0 2.227 0l3.854-4.126 5.406 5.788a1.653 1.653 0 0 0 2.227 0 1.653 1.653 0 0 0 0-2.227L9.961 6.226l3.854-4.126a1.653 1.653 0 0 0 0-2.227 1.653 1.653 0 0 0-2.227 0L8.116 6.226 2.71.438A1.374 1.374 0 0 0 1.749 0h11.734Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-highlight group-hover:text-foreground transition-colors">LeetCode</h3>
              <p className="text-gray-400 text-sm">Problem solving</p>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-r from-secondary to-accent rounded-2xl p-8 shadow-xl border border-highlight/20">
          <h2 className="text-2xl font-bold text-highlight mb-6 text-center">Send me a message</h2>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/40 rounded-lg text-green-400 text-center">
              Message sent successfully! I&apos;ll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/40 rounded-lg text-red-400 text-center">
              Failed to send message. Please try again or email me directly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-accent border border-highlight/20 rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:border-highlight/40 transition-colors" 
                  placeholder="Your name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-accent border border-highlight/20 rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:border-highlight/40 transition-colors" 
                  placeholder="your.email@example.com" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-accent border border-highlight/20 rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:border-highlight/40 transition-colors" 
                placeholder="What's this about?" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea 
                rows={5} 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-accent border border-highlight/20 rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:border-highlight/40 transition-colors resize-none" 
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-highlight text-background px-8 py-3 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
} 