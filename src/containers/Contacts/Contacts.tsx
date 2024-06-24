import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="container-xxl mb-3">
      <div className="row mt-4">
        <h2 className="contacts-title mb-5">Связаться с нами</h2>
        <div className="col-6">
          <h3 className="mb-3">Контакты:</h3>
          <div className="row mb-3">
            <div className="col-6">
              <strong className="d-block">Москва</strong>
              <a href="#" className="text-decoration-none text-black fs-3 fw-bold">+7 (495) 663-73-73</a>
            </div>
            <div className="col-6">
             <strong className="d-block">E-mail</strong>
              <a href="#" className="text-decoration-none text-black">velonews@gmail.com</a>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <strong className="d-block">Екатеринбург</strong>
              <a href="#" className="text-decoration-none text-black">+8 (553) 434-20-2</a>
            </div>
            <div className="col-4">
              <strong className="d-block">Санкт-Петербург</strong>
              <a href="#" className="text-decoration-none text-black">+8 (4012) 599-078</a>
            </div>
            <div className="col-4">
              <strong className="d-block">Калининград</strong>
              <a href="#" className="text-decoration-none text-black">+7 812 930 1703</a>
            </div>
            <p className="mt-5">Звонки принимаются по рабочим дням с 10:00 до 18:00 по московскому времени.</p>
          </div>
        </div>
        <div className="col-6">
          <iframe className="yandex-map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aef6890bdc03a5274be8c1f006ff00e38d70fbd6df92fc8bc84600a2f87c35245&amp;source=constructor">
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;