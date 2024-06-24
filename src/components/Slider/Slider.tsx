import React from 'react';
import imgCube from '../../assets/slider/cube.jpg';
import imgCanyon from '../../assets/slider/canyon.jpg';
import imgScott from '../../assets/slider/scott.jpg';
import './Slider.css';

interface Slider {
  title: string;
  message: string;
  alt: string;
  img: string;
  active: boolean;
}

const imgCubeTyped: string = imgCube as string;
const imgCanyonTyped: string = imgCanyon as string;
const imgScottTyped: string = imgScott as string;

const slider: Slider[] = [
  {
    title: 'Свежие новости компании «Cube»',
    message:
      '21 марта 2019 года компания “Cube” представила новую линейку горных велосипедов “Stereo”.' +
      'Новая модель “Cube Stereo”, получила улучшенный сплав алюминия, благодаря которому велосипед стал весит 13.2кг. ' +
      'Новая модель получила улучшенные тормоза от компании “Sram”. Производитель заявил, что начальная стоимость велосипеда от 2000 долларов.',
    alt: 'cube',
    active: true,
    img: imgCubeTyped
  },
  {
    title: 'Свежие новости компании «Canyon»',
    message:
      '20 марта 2019 года компания “Canyon Bicycles” представила новую линейку горных велосипедов “Strive”. ' +
      'Данная линейка отличается от предыдущий улученной базой колес, в данной модели стоит самая последняя вилка от компании Fox. ' +
      'Модель имеет полностью карбоновую раму. Производитель заявил, что начальная стоимость велосипеда будет от 2500 евро.',
    alt: 'canyon',
    active: false,
    img: imgCanyonTyped
  },
  {
    title: 'Свежие новости компании «Scott»',
    message:
      '9 апреля 2019 года компания “Scott” представила новую линейку горных велосипедов “Genuis” ' +
      '.Данная линейка была задумана производителем как downhill bike, специально предназначенный для скоростного спуска с горы . ' +
      'Велосипед имеет полностью карбоновую раму , благодаря чему он имеет более легкий вес около 10кг. ' +
      'Новая модель получила новую улучшенную вилку от компании “Fox 40”.',
    alt: 'scott',
    active: false,
    img: imgScottTyped
  },
];

const Slider = () => {
  return (
    <div id="carousel" className="carousel slide custom-setting-slider slider-backdrop">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carousel"
                  data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1">
          </button>
          <button type="button" data-bs-target="#carousel"
                  data-bs-slide-to="1"
                  aria-label="Slide 2">
          </button>
          <button type="button" data-bs-target="#carousel"
                  data-bs-slide-to="2"
                  aria-label="Slide 3">
          </button>
        </div>
        <div className="carousel-inner">
          {slider.map((slider) => (
            <div key={slider.title} className={`carousel-item ${slider.active ? 'active' : ''}`}>
              <img src={slider.img} className="d-block w-100 slider-img" alt={slider.alt}/>
              <div className="carousel-caption d-none d-md-block">
                <h3 className="slider-title">{slider.title}</h3>
                <p className="slider-desc">{slider.message}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button"
                data-bs-target="#carousel"
                data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next"
                type="button"
                data-bs-target="#carousel"
                data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  );
};

export default Slider;