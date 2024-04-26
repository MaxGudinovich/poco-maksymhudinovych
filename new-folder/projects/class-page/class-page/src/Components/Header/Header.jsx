import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from '../Header/Header.module.scss';

const Header = () => {
  const navigate = useNavigate();

  function toHome() {
    navigate('/');
  }

  return (
    <div className={styles.header}>
      <img
        src="logo.png"
        alt="logo"
        className={styles.header__logo}
        onClick={toHome}
      />
      <nav className={styles.header__nav}>
        <NavLink to="/" className={styles.header__nav_link}>
          Home
        </NavLink>
        <NavLink to="/about" className={styles.header__nav_link}>
          About
        </NavLink>
        <NavLink to="/team" className={styles.header__nav_link}>
          Team
        </NavLink>
        <NavLink to="/contact" className={styles.header__nav_link}>
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
