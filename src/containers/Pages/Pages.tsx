import React from 'react';
import Header from '../../components/Header/Header';
import './Pages.css';
import Slider from '../../components/Slider/Slider';
import Home from '../Home/Home';
import Footer from '../../components/Footer/Footer';
import About from '../About/About';
import {Route, Routes} from 'react-router-dom';
import Contacts from '../Contacts/Contacts';

const Pages = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <Home />
          </>
        }/>
        <Route path="/about" element={
          <About />
        }/>
        <Route path="/contacts" element={
          <Contacts />
        }/>
        <Route path="*" element={<h1>Not found!</h1>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default Pages;