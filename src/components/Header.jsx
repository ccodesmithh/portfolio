import React from 'react';

const Header = ({ name = 'Your Name', navItems = ['About', 'Projects', 'Contact'] , className=''}) => {
  return (
    <header className={`site-header ${className}`}>
      <div className="header-inner">
        <div className="brand">
          <a href="#hero" className="brand-link">{name}</a>
        </div>
        <nav className="nav">
          {navItems.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className="nav-link">{n}</a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
