import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from '../Button/Button';

function Cards() {
  return (
    <>
      <div className='cards'>
        <h1 className='orangeheader'>
            <i class="fas fa-info-circle"></i> About Us 
        </h1>
        <p className='aboutPara'>
          
          <ul className="list">
          <b >Our Mission:</b><br/>
            <ul>
              We simplify the Overseas Education Admissions Process and provide World’s Best Education
              Solutions.
            </ul>
            <ul>
              We simplify the Overseas Education Admissions Process and provide World’s Best Education
              Solutions.
            </ul>
            <ul>
              We strive to be the world’s most reliable service brand.
            </ul>
            <ul>
              We strive to be the world’s most reliable service brand.
            </ul>
            <ul>
              We clear all the doubts and of students about overseas education through our free Counseling
              Service
            </ul>
            <ul>
              We provide up-to date information and course details of universities where they heading to.
            </ul>
            <ul>
              We recommend right course for the right candidate after analyzing their educational and financial
              background.
            </ul>
            <b >Our Vission:</b><br/>
            Our vision is to make a transformative impact on Study Abroad 
            Service Sector through continual innovation in 
            student services by connecting institutions, recruiters, and students across the globe.  
            Always to provide the  best services to the students and help our students succeeding in their studies and future career. 
          </ul>
          <ul>
          
          </ul>
        </p>
        <h1 className='orangeheader'> Our Services </h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='img/fs 8.jpg'
                text='Most of the students applying for further education abroad can not go through the right way to
                success. It’s a crucial point. Our counseling for the right country and University choice.'
                label='Student Counceling'
                path='/services'
              />
              <CardItem
                src='img/fs 10.jpg'
                text='Admission application is most important part for a student aspiring for further education
                considering this a first introduction to the University authority. Our councilor helps student to
                make it properly and send it to the university.'
                
                label='Application Processing'
                path='/services'
              />
              
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='img/visa.jpg'
                text='We guide you to fill up the visa application form as per requirement of different countries 
                  and getting your documents ready for submission .'
                label='Visa Processing'
                path='/sign-up'
              />
              <CardItem
                src='img/sf 4.jpg'
                text='We are sending students abroad on multiple education programs'
                label='Education Program'
                path='/services'
              />
            </ul>
            
          </div>
        </div>



        <h1 className='orangeheader'>
          <i class="fas fa-balance-scale"></i> Education Programs 
        </h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='img/fs 11.jpg'
                text='There are multiple Bachelors program in multiple universities we are getting our students admitted in'
                label='Undergaduation Program'
                path='/services'
              />
              <CardItem
                src='img/student 5.jpg'
                text='Get huge amount of scholarsips from all our affiliated universities all over the world.'
                
                label='Post Graduation Program'
                path='/services'
              />
              <CardItem
                src='img/phd.jpg'
                text='Get huge amount of scholarsips from all our affiliated universities all over the world.'
                
                label='Phd'
                path='/services'
              />  
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='img/diploma.jpg'
                text='We offer a lot useful soft skill courses which makes a students life a lot easier in foreign countries'
                label='Diploma'
                path='/services'
              />
              <CardItem
                src='img/mbbs.jpg'
                text='Get huge amount of scholarsips from all our affiliated universities all over the world.'
                
                label='MBBS'
                path='/services'
              />
              <CardItem
                src='img/fs 14.jpg'
                text='Get huge amount of scholarsips from all our affiliated universities all over the world.'
                
                label='Soft Skill Development'
                path='/services'
              /> 
            </ul>  
          </div>
        </div>


        <h1 className='orangeheader'>
          <i class="fas fa-balance-scale"></i> Legal Support 
        </h1>
        <p className='aboutPara'>
          Legal Support lorem ipsom Legal Support lorem ipsom Support lorem ipsom
          ipsom Legal Support lorem ipsom Support lorem
          Legal Support lorem ipsom Legal Support lorem ipsom Support lorem ipsom
        </p>

        <h1 className='orangeheader'>
          <i class="fas fa-handshake"></i> Be Our Global Partner 
        </h1>
        <p className='aboutPara'>
          <ul className="list">
            This is a Global platform where you can grow your business, no matter
            which country you are applying from. If already you have your business setup with total
            communicating system then <br/>
          </ul>

          

          *.Fill up the form and register with Sunway Study Group <br/>
          * Submit your business documents. <br/>
          *Our councilor will contact and evaluate your submitted documents with in short period of time. <br/>
          *We may sign an agreement for business agent subjective on negotiation. <br/><br/>
          <Button buttonStyle='btn--inCard'>Apply</Button> 
        </p>
      </div>
    </>
  );
}

export default Cards;
