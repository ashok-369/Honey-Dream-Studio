import { useScrollReveal } from '../animations/gsapAnimations';
import { Mail, Phone, MapPin, Instagram, Facebook, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';
import Lottie from 'lottie-react';

const Contact = () => {
  useScrollReveal('.reveal-up');

  return (
    <main className="pt-20 bg-white">
      {/* Hero */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full geometric-pattern opacity-10" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 reveal-up">
            Let's Create Something <br />
            <span className="text-accent italic">Extraordinary</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg reveal-up">
            Have questions? Our team is ready to help you scale your post-production workflow.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="reveal-up p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-accent/30 transition-all duration-500 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Lottie 
                    animationData={null}
                    path="https://lottie.host/67702677-9494-44d4-86a0-e2d93e21876e/T8B5P5N5N5.json"
                    loop={true}
                  />
                </div>
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <h4 className="text-xl font-bold mb-2">Email Us</h4>
                <p className="text-slate-500 text-sm mb-4">Our team typically responds within 4 hours.</p>
                <a href="mailto:info@honeydreamstudio.com" className="text-primary font-bold hover:text-accent transition-colors">
                  info@honeydreamstudio.com
                </a>
              </div>

              <div className="reveal-up p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-accent/30 transition-all duration-500">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} />
                </div>
                <h4 className="text-xl font-bold mb-2">Live Chat</h4>
                <p className="text-slate-500 text-sm mb-4">Available on WhatsApp and Facebook Messenger.</p>
                <div className="flex gap-4">
                  <a href="#" className="text-primary font-bold hover:text-accent transition-colors">WhatsApp</a>
                  <span className="text-slate-300">|</span>
                  <a href="#" className="text-primary font-bold hover:text-accent transition-colors">Messenger</a>
                </div>
              </div>

              <div className="reveal-up p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-accent/30 transition-all duration-500">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Instagram size={24} />
                </div>
                <h4 className="text-xl font-bold mb-2">Follow Us</h4>
                <p className="text-slate-500 text-sm mb-4">See our latest work and studio updates.</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all">
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 reveal-up">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-50">
                <h3 className="text-3xl font-bold mb-8">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input 
                        type="text" 
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-accent transition-all peer"
                        placeholder=" "
                      />
                      <label className="absolute left-4 -top-2 text-xs bg-white px-2 text-slate-400 transition-all pointer-events-none 
                        peer-placeholder-shown:top-4 peer-placeholder-shown:left-6 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0
                        peer-focus:-top-2 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:text-accent">
                        Full Name
                      </label>
                    </div>
                    <div className="relative">
                      <input 
                        type="email" 
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-accent transition-all peer"
                        placeholder=" "
                      />
                      <label className="absolute left-4 -top-2 text-xs bg-white px-2 text-slate-400 transition-all pointer-events-none 
                        peer-placeholder-shown:top-4 peer-placeholder-shown:left-6 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0
                        peer-focus:-top-2 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:text-accent">
                        Email Address
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-accent transition-all peer"
                      placeholder=" "
                    />
                    <label className="absolute left-4 -top-2 text-xs bg-white px-2 text-slate-400 transition-all pointer-events-none 
                      peer-placeholder-shown:top-4 peer-placeholder-shown:left-6 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0
                      peer-focus:-top-2 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:text-accent">
                      Subject
                    </label>
                  </div>

                  <div className="relative">
                    <textarea 
                      rows="6"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-accent transition-all peer"
                      placeholder=" "
                    ></textarea>
                    <label className="absolute left-4 -top-2 text-xs bg-white px-2 text-slate-400 transition-all pointer-events-none 
                      peer-placeholder-shown:top-4 peer-placeholder-shown:left-6 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0
                      peer-focus:-top-2 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:text-accent">
                      Your Message
                    </label>
                  </div>

                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 group">
                    Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 w-full bg-slate-100 relative overflow-hidden">
        <img 
          src="https://picsum.photos/seed/map/1920/600?grayscale" 
          alt="Map" 
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-6 glass rounded-3xl shadow-2xl text-center">
            <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} />
            </div>
            <h4 className="font-bold">Our Global Headquarters</h4>
            <p className="text-slate-500 text-sm">Los Angeles, CA</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
