import React from 'react';
import {Link} from 'react-router-dom';
import './PageNotFounds.css';

const PageNotFounds = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center page-404">
      <h3 className="fw-bold fs-1 mb-3">Ошибка 404</h3>
      <p className="mb-5 message-alert text-center px-2">
        Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно она устарела,
        была удалена, или был введен неверный адрес в адресной строке.
      </p>
      <Link to="/" className="btn btn-primary">Перейти на главную</Link>
    </div>
  );
};

export default PageNotFounds;