import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Important Links</h2>
            <a href="https://www.qs.com/rankings/">QS Ranking</a>
            <a href="https://www.britishcouncil.org/">British Council</a>
            <a href="https://cscuk.fcdo.gov.uk/apply/masters-scholarships/">Commonwealth Scholarship</a>
            <a href="https://www.cic.gc.ca/english/helpcentre/results-by-topic.asp?top=29">Canada Express Entry</a>
            <a href="https://www.gov.uk/browse/visas-immigration">Living in UK</a>
            <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html">Study in Canada</a>
            <a href="https://bangladesh.embassy.gov.au/daca/home.html">Australian High Commission</a>
            <a href="https://www.internationalstudent.com/study_usa/">Study in USA</a>
            <a href="https://www.biman-airlines.com/">Bangladesh Airlines</a>
            <a href="https://www.timeshighereducation.com/">Times Higher Education</a>

            
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link  to='/'>Instagram</Link>
            <Link  to='/'>Facebook</Link>
            <Link  to='/'>Youtube</Link>
            <Link  to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Sunway Study Group
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>SSG © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link-facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-square' />
            </Link>
            <Link
              class='social-icon-link-instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link-youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link-twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link-linkedIn'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin-square' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
