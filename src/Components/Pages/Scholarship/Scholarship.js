import React from 'react';
import '../../../App.css';
import HeroSection from '../../HeroSection/HeroSection';
import ApplyScholarship from '../ApplyScholarship/ApplyScholarship'


function Scholarship() {
  return (
    <>
      <HeroSection
        herotitle= 'Get Scholarship Now'
        imgsrc='https://cdn.pixabay.com/photo/2021/10/23/03/35/mountain-6734031_960_720.jpg'
        btnlink='/'
      />
      <ApplyScholarship/>
      
    </>
  );
}


export default Scholarship;