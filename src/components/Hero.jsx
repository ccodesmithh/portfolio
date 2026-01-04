import React from 'react';

const Hero = ({ title = 'Hi There, I\'m Yudha Prasetiya', subtitle = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', ctaText = 'Get in touch', ctaHref = '#contact', className='' }) => {
  return (
    <section id="hero" className={`hero ${className}`}>
      <div className="hero-inner">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <div className="hero-actions">
          <a href={ctaHref} className="btn btn-primary">{ctaText}</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
