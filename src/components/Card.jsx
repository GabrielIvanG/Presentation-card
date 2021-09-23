import React from 'react';
import './card.css';
import logoImg from '../images/belliadsLogoPNG.png';

export default function Card() {
  const handleMouseEnter = (e) => {
    let card = document.getElementsByClassName('card')[0];
    let xAxis = -(window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = -(window.innerHeight / 2 - e.pageY) / 30;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  const handleEnter = () => {
    let logo = document.getElementsByClassName('logoPng')[0];
    let card = document.getElementsByClassName('card')[0];
    let title = document.getElementsByClassName('title')[0];
    let description = document.getElementsByClassName('description')[0];
    let button = document.getElementsByClassName('contact')[0];
    card.style.transition = 'none';
    logo.style.transform = `translateZ(100px) rotateZ(45deg)`;
    title.style.transform = `translateZ(75px)`;
    description.style.transform = `translateZ(50px)`;
    button.style.transform = `translateZ(100px)`;
  };

  const handleLeave = () => {
    let card = document.getElementsByClassName('card')[0];
    let logo = document.getElementsByClassName('logoPng')[0];
    let title = document.getElementsByClassName('title')[0];
    let button = document.getElementsByClassName('contact')[0];
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = 'all 0.5s ease';
    logo.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = `translateZ(0)`;
    button.style.transform = `translateZ(0)`;
  };

  const handleClick = () => {
    window.open('https://www.linkedin.com/in/ivangabrielgonzalez/');
  };

  return (
    <div
      className="container"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onMouseMove={handleMouseEnter}
    >
      <div className="card">
        <div className="logoContainer">
          <div className="circle"></div>
          <img src={logoImg} alt="logoImg" className="logoPng" />
        </div>
        <div className="info">
          <h1 className="title text">Belliads</h1>
          <h3 className="description text">Iván Gabriel González</h3>
          <div className="perks">
            <button>Web dev</button>
            <button>Advertising</button>
            <button>Design</button>
            <button>Marketing</button>
          </div>
        </div>
        <div className="contact">
          <button onClick={handleClick}>CONTACT</button>
        </div>
      </div>
    </div>
  );
}
