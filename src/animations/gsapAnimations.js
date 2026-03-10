import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (selector, options = {}) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: options.y || 50,
          scale: options.scale || 1,
          rotate: options.rotate || 0,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: options.duration || 1,
          delay: options.delay || 0,
          ease: options.ease || 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: options.start || 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, [selector, options]);
};

export const useTextReveal = (selector) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((el) => {
      const text = el.textContent;
      el.textContent = '';
      
      const chars = text.split('').map((char) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        el.appendChild(span);
        return span;
      });

      gsap.from(chars, {
        opacity: 0,
        y: 20,
        stagger: 0.02,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
        },
      });
    });
  }, [selector]);
};
