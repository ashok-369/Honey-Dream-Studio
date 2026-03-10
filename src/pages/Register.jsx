import { useState } from 'react';
import { useScrollReveal } from '../animations/gsapAnimations';
import { ChevronRight, ChevronLeft, CheckCircle2, Upload, FileText, User, Briefcase } from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';

const steps = [
  { title: 'Personal Info', icon: <User size={20} /> },
  { title: 'Project Details', icon: <Briefcase size={20} /> },
  { title: 'Files & Style', icon: <FileText size={20} /> },
];

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  useScrollReveal('.reveal-up');

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  const handleBack = () => setCurrentStep(prev => Math.max(prev - 1, 0));
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="pt-20 min-h-screen bg-slate-50">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Free Trial</h1>
            <p className="text-slate-600">Experience the Honey Dream quality with your first project.</p>
          </div>

          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden reveal-up">
            {/* Progress Bar */}
            <div className="bg-slate-900 p-8 flex justify-between relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />
              <div 
                className="absolute top-1/2 left-0 h-0.5 bg-accent -translate-y-1/2 z-0 transition-all duration-500" 
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              />
              
              {steps.map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center gap-2">
                  <div className={clsx(
                    'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border-2',
                    index <= currentStep ? 'bg-accent border-accent text-white' : 'bg-slate-800 border-slate-700 text-slate-500'
                  )}>
                    {index < currentStep ? <CheckCircle2 size={20} /> : step.icon}
                  </div>
                  <span className={clsx(
                    'text-xs font-display font-medium hidden sm:block',
                    index <= currentStep ? 'text-white' : 'text-slate-500'
                  )}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    {currentStep === 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Full Name</label>
                          <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:border-accent outline-none transition-all" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Studio Name</label>
                          <input type="text" placeholder="Dream Catchers Studio" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:border-accent outline-none transition-all" required />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <label className="text-sm font-bold text-slate-700">Email Address</label>
                          <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:border-accent outline-none transition-all" required />
                        </div>
                      </div>
                    )}

                    {currentStep === 1 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Job Type</label>
                          <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:border-accent outline-none transition-all">
                            <option>Wedding Video Edit</option>
                            <option>Wedding Photo Edit</option>
                            <option>Real Estate Video</option>
                            <option>Instagram Teaser</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Job Name</label>
                          <input type="text" placeholder="Sarah & James Wedding" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:border-accent outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">File Size (Approx)</label>
                          <input type="text" placeholder="50 GB" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:border-accent outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Deadline</label>
                          <input type="date" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:border-accent outline-none transition-all" />
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">File Access Link (Google Drive/Dropbox)</label>
                          <input type="url" placeholder="https://drive.google.com/..." className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:border-accent outline-none transition-all" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Job Description & Instructions</label>
                          <textarea rows="4" placeholder="Tell us about the project flow..." className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:border-accent outline-none transition-all"></textarea>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Style References (Links to previous works)</label>
                          <input type="text" placeholder="https://vimeo.com/..." className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:border-accent outline-none transition-all" />
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between pt-8 border-t border-slate-100">
                      <button 
                        type="button"
                        onClick={handleBack}
                        disabled={currentStep === 0}
                        className={clsx(
                          'flex items-center gap-2 font-display font-bold transition-all',
                          currentStep === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:text-primary'
                        )}
                      >
                        <ChevronLeft size={20} /> Back
                      </button>
                      
                      {currentStep < steps.length - 1 ? (
                        <button 
                          type="button"
                          onClick={handleNext}
                          className="btn-primary flex items-center gap-2"
                        >
                          Next Step <ChevronRight size={20} />
                        </button>
                      ) : (
                        <button 
                          type="submit"
                          className="btn-accent flex items-center gap-2"
                        >
                          Submit Project <Upload size={20} />
                        </button>
                      )}
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-48 h-48 mx-auto mb-8">
                      <Lottie 
                        animationData={null} 
                        path="https://lottie.host/85570222-259e-450f-90e6-8608f65796f7/8z6O3N6N6N.json"
                        loop={false}
                      />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Project Submitted!</h2>
                    <p className="text-slate-600 mb-8 max-w-md mx-auto">
                      Thank you for choosing Honey Dream Studio. Our team will review your project and get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="btn-primary"
                    >
                      Submit Another Project
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
