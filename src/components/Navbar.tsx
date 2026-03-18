import React from 'react';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">QueueLess</h1>
        <p className="navbar-subtitle">Skip the Wait, Join the Queue</p>
      </div>
    </nav>
  );
};

export default Navbar;
