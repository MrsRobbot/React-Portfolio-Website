import React from 'react';
import "./home.css";
import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials.jsx';
const Home = () => {
  return (
    <section className="home container" id="home">
      <img src={Me} alt="" className="home__img" />
      <h1 className="home__name">BI Elliot</h1>
      <span className="home__education">I'm a Front-end developer</span>
      <HeaderSocials/>
      <a href="#" className="btn"></a>
    </section>
  )
}

export default Home
