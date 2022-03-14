import React from 'react';
import Banner from '../components/Banner.js';
import Hero from "../components/Hero.js";
import { Link } from "react-router-dom";
import Scervices from '../components/Scervices.js';
import FeaturedRooms from '../components/FeaturedRooms.js';

function Home() {
  return (
    <>
    <Hero>
    <Banner title="luxurious rooms" subtitle="delux rooms starting at $299">
      <Link to="/rooms" className="btn-primary">Our rooms</Link>
    </Banner>
    </Hero>
    <Scervices />
    <FeaturedRooms />
    </>
  )
}

export default Home