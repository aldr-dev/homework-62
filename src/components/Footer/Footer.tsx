import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="pt-4 pb-4">
        <div className="container-xxl">
          <div className="row d-flex align-items-center">
            <div className="col-2 d-none d-lg-block ">
              <strong className="text-uppercase">velo!news</strong>
            </div>
            <div className="col-12 col-md-8 col-lg-7">
              <strong className="text-uppercase">о нас:</strong>
              <p className="brand-about-text">
                VeloNews – самый популярный новостной портал, про велосипеды.
                В этом интереснейшем разделе нашего сайта вы найдете статьи о велосипедах, бережно собранные и
                написанные нами.
                В них отражены все самые необходимые технические знания о велосипедной технике,
                советы профессионалов из мира велоспорта, интересные факты и множество других занимательных вещей.
              </p>
              <strong>
                Связаться с нами:
                <a href="#" className="text-decoration-none">&nbsp; admin@gmail.com</a>
              </strong>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mt-4 mt-md-0">
              <strong className="text-uppercase mb-2 d-block">подписывайтесь на нас:</strong>
              <div className="d-flex gap-3">
                <a href="#" className="bi bi-facebook fa-fb">facebook</a>
                <a href="#" className="bi bi-twitter fa-tw">twitter</a>
                <a href="#" className="bi bi-telegram fa-tg">telegram</a>
                <a href="#" className="bi bi-youtube fa-yt">youtube</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <span className="container-xxl d-block p-1">
            &copy; Все права защищены 2024 г
        </span>
      </div>
    </footer>
  );
};

export default Footer;