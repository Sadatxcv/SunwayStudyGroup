import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import  {Button} from '../../Button/Button'
import Dropdown from '../../Dropdown/Dropdown';

// import TextScroller from "./TextScroller";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const showButton = () => {
    if (window.innerWidth <= 100) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      {/* <div className='textScroller'>
            <TextScroller text="Long long text to scroll" />
      </div> */}
      <nav className='navbar'>
        
        <div className='navbar-container'>
          <ul>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              
              <img className='logo' src="src\Components\Header\Navbar\Img\logo.jpg" alt='logo'/>
            </Link>
          </ul>
          <ul>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
          </ul>
          
          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/University'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                University
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Scholarship'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Scholarship
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Agent'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Agent
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Blog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>
            <li className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                SoftSkills <i className='fas fa-caret-down' />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Apply <i className='fas fa-caret-down' />
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' buttonLink="/Login">SignIn</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
