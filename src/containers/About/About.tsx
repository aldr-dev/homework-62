import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page container-xxl mb-4">
        <div className="about-background-img mt-2 mb-4">
          <div className="about-inner">
            <h2 className="fw-bold">О нас:</h2>
            <p className="fw-normal fs-5 about-desc">"VeloNews" – самый популярный новостной портал, про велосипеды.</p>
          </div>
        </div>
        <p className="about-desc-company">
          VeloNews – самый популярный новостной портал, про велосипеды.
          В этом интереснейшем разделе нашего сайта вы найдете статьи о велосипедах,
          бережно собранные и написанные нами. В них отражены все самые необходимые технические знания о велосипедной
          технике, советы профессионалов из мира велоспорта, интересные факты и множество других занимательных вещей.
        </p>
        <p className="about-desc-company">
          Основным преимуществом компании, конечно, стало размещение производственных мощностей на территории России. Кроме сокращения издержек
          на производстве, так же обеспечивается полный и актуальный ассортимент запчастей и аксессуаров для выпускаемой продукции.
          А это крайне немаловажно для покупателей и пользователей бренда Stels. Владелец велосипеда может быть полностью уверен,
          что в случае поломки он сможет осуществить ремонт в кратчайшие сроки, так как все запчасти и аксессуары есть в наличии
          и их производство полностью перекрывает потребности потребителей. Кроме этого, обеспечивается стопроцентная
          сервисная поддержка и заводская гарантия на всю выпускаемую продукцию, сертифицированные центры гарантируют быстрый и
          качественный ремонт. И это относится не только к гарантийному сроку, но и послегарантийному ремонту и обслуживанию.
          Компания «VeloNews» работает на высоком уровне международных стандартов,
          в связи с этим все производственные процессы прошли сертификацию — ISO 9001:2011.
        </p>
        <p className="about-desc-company">
          Данная сертификация касалась не только производства, но и всех бизнес-процессов предприятия и позволила сделать
          перспективные долгосрочные шаги в будущее. Стандартизации и сертификации подверглись три завода предприятия
          (г. Кубинка, г. Жуковка, ст. Крыловская), в части производственных процессов, процессов реализации, гарантийного
          и пост-гарантийного ремонта, что в конечном итоге позволяет предоставить конечному потребителю продукцию соответствующую
          высочайшим международным стандартам качества.
        </p>
        <p className="about-desc-company">
          Компания VeloNews быстро приобрел признание и заслуженную популярность не только в России, но и за ее пределами.
          Велосипеды, скутеры и прочая продукция под этим брендом осуществили прорыв Российского производства на европейский
          уровень. Повсеместное использование автоматизированных и роботизированных циклов производства и общая его оптимизация
          по современным стандартам позволяет производить большой объем велосипедов. Стоит отметить, что производство велосипедов
          Stels является самым крупным по объему продукции во всей Европе.
        </p>
    </div>
  );
};

export default About;