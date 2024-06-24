import React from 'react';
import Card from '../../components/Card/Card';
import imgCube from '../../assets/slider/cube.jpg';
import imgCanyon from '../../assets/slider/canyon.jpg';
import imgScott from '../../assets/slider/scott.jpg';

interface Posts {
  title: string;
  date: string;
  role: string;
  message: string;
  img: string;
}

const imgCubeTyped: string = imgCube as string;
const imgCanyonTyped: string = imgCanyon as string;
const imgScottTyped: string = imgScott as string;

const postList: Posts[] = [
  {
    title: 'Свежие новости компании «Cube»',
    date: '24.06.2024',
    role: 'Admin',
    message:
      '21 марта 2019 года компания “Cube” представила новую линейку горных велосипедов “Stereo”. ' +
      'Новая модель “Cube Stereo”, получила улучшенный сплав алюминия, благодаря которому велосипед стал весит 13.2кг. ' +
      'Новая модель получила улучшенные тормоза от компании “Sram”. Производитель заявил, что начальная стоимость велосипеда от 2000 долларов.',
    img: imgCubeTyped
  },
  {
    title: 'Свежие новости компании «Canyon»',
    date: '24.06.2024',
    role: 'Admin',
    message:
      '20 марта 2019 года компания “Canyon Bicycles” представила новую линейку горных велосипедов “Strive”. ' +
      'Данная линейка отличается от предыдущий улученной базой колес, в данной модели стоит самая последняя вилка от компании Fox. ' +
      'Модель имеет полностью карбоновую раму. Производитель заявил, что начальная стоимость велосипеда будет от 2500 евро.',
    img: imgCanyonTyped
  },
  {
    title: 'Свежие новости компании «Scott»',
    date: '24.06.2024',
    role: 'Admin',
    message:
      '9 апреля 2019 года компания “Scott” представила новую линейку горных велосипедов “Genuis” ' +
      '.Данная линейка была задумана производителем как downhill bike, специально предназначенный для скоростного спуска с горы . ' +
      'Велосипед имеет полностью карбоновую раму , благодаря чему он имеет более легкий вес около 10кг. ' +
      'Новая модель получила новую улучшенную вилку от компании “Fox 40”.',
    img: imgScottTyped
  },
];

const Home = () => {
  return (
    <main className="container-xxl">
      <div className="row">
        <div className="col-5">

        </div>
        <div className="col-7">
          <div className="d-flex flex-column gap-4">
            {postList.map((post) => (
              <Card
                key={post.title}
                title={post.title}
                date={post.date}
                role={post.role}
                message={post.message}
                img={post.img}/>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;