import React from 'react';
import Header from '../../components/Header/Header';
import './Pages.css';
import Slider from '../../components/Slider/Slider';
import Home from '../Home/Home';
import Footer from '../../components/Footer/Footer';

const Pages = () => {
  return (
    <>
      <Header />
      <Slider />
      <Home />
      <Footer />
    </>
  );
};

export default Pages;