import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-sm">
        <div className="container-xxl">
          <NavLink to="/" className="navbar-brand d-flex align-items-center">
            <img src="https://j36949281.myjino.ru/images/logo.png" alt="Velo!News" width="50" height="50" className="d-inline-block align-text-top me-2"/>
            Velo!News
          </NavLink>
          <button className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="/" className="nav-link" aria-current="page">Главная</NavLink>
              <NavLink to="/about" className="nav-link">О нас</NavLink>
              <NavLink to="/contacts" className="nav-link">Контакты</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;