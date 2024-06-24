import React from 'react';
import Header from '../../components/Header/Header';
import './Pages.css';
import Slider from '../../components/Slider/Slider';
import Home from '../Home/Home';

const Pages = () => {
  return (
    <>
      <Header />
      <Slider />
      <Home />
    </>
  );
};

export default Pages;