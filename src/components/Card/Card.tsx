import React from 'react';
import './Card.css';

interface Props {
  title: string;
  date: string;
  role: string;
  message: string;
  img: string;
}

const Card: React.FC<Props> = ({title, date, role, message, img}) => {
  return (
    <div className="card">
        <img src={img} className="card-img-top" alt={title}/>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <span>Дата публикации:
            <span className="text-primary"> {date}</span>,
            Роль: <strong className="text-danger">{role}</strong>
          </span>
          <hr/>
          <p className="card-text">{message}</p>
        </div>
    </div>
  );
};

export default Card;