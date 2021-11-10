import React from 'react';
import '../../../App.css';
import HeroSection from '../../HeroSection/HeroSection';
import ApplyScholarship from '../ApplyScholarship/ApplyScholarship'


function Scholarship() {
  return (
    <>
      <HeroSection
        herotitle= 'Get Scholarship Now'
      />
      <ApplyScholarship/>
      
    </>
  );
}


export default Scholarship;