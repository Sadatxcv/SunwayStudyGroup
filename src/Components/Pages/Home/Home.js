import React from 'react';
import '../../../App.css';
import HeroSection from '../../HeroSection/HeroSection'
import Cards from '../../Card/Cards';

function Home() {
  return (
    <>
      <HeroSection
      src='./video-2.mp4'
      herotitle='Win The Best'/>
      <Cards/>
      
    </>
  );
}


export default Home;
