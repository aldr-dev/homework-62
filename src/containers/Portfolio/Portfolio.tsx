import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import randomNumber from '../../assets/portfolio/random-number.png';
import joke from '../../assets/portfolio/joke.png';

const appRandomNumber: string = randomNumber as string;
const appJoke: string = joke as string;

const Portfolio = () => {
  return (
    <div className="container-xxl my-4">
      <div className="row mb-4 gap-3">
        <div className="col-12 col-sm-7 col-md-5 col-lg-3">
          <div className="card">
            <img src={appRandomNumber} className="card-img-top" alt="приложение-рандомное-число"/>
            <div className="card-body border-top">
              <Link to="work-random-number" className="btn btn-primary">Подробнее</Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-7 col-md-5 col-lg-3">
          <div className="card">
            <img src={appJoke} className="card-img-top" alt="приложение-шутка"/>
            <div className="card-body border-top">
              <Link to="work-joke" className="btn btn-primary">Подробнее</Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Portfolio;