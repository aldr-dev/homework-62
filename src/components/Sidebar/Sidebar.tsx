import React from 'react';
import './Sidebar.css';

interface Props {
  banner: string;
}

const Sidebar: React.FC<Props> = ({banner}) => {
  return (
    <>
      <a href="#" className="ad-banner">
        <img className="ad-banner-img" src={banner} alt="Рекламный баннер - Active-Shop"/>
        <span className="ad-banner-text">Реклама</span>
      </a>
      <a href="#" className="ad-banner">
        <img className="ad-banner-img" src={banner} alt="Рекламный баннер - Active-Shop"/>
        <span className="ad-banner-text">Реклама</span>
      </a>
    </>
  );
};

export default Sidebar;