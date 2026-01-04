import React from 'react';

const About = ({ children, className='' }) => {
  return (
    <section id="about" className={`about ${className}`}>
      <div className="container">
        <h2 className="section-title">About</h2>
        <p className="section-copy">{children ?? 'I\'m a front-end developer who loves crafting beautiful, fast, and accessible web experiences. I focus on clean design, delightful interactions, and maintainable code.'}</p>
      </div>
    </section>
  );
};

export default About;
