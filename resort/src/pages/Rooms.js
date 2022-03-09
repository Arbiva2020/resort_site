import React from 'react';
import Hero from "../components/Hero.js";
import Banner from '../components/Banner.js';
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="Our rooms">
        <Link to="/" className='btn-primary'>
          Return to homepage
        </Link>
      </Banner>
    </Hero>
  );
}

export default Rooms