import React from 'react';
import './hero.scss';

const img = "https://images.unsplash.com/photo-1589571838803-01e4ebe8ff7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80";
const shape = "https://i.imgur.com/bfQrE59.png";

const Hero = () => {
  return (
    <div className="hero">
      <header>
        <img src="" />
        <button>Get Started</button>
      </header>

      <main>
        <section className="hero__info">
          <h1>Teach endlessly, Empower the world!</h1>
          <p>Start sharing you knowledge and start growing your educational successs with Learkn.</p>
          <button>Start Teaching Now!</button>

          <div></div>
        </section>
        <section className="hero__image">
          <div className="hero__image-content">
            <img src={img} />
            <img src={shape} />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Hero;