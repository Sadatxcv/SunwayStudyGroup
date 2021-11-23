import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import  {Button} from '../../Button/Button'
import SoftSkillDropDown from '../../Dropdown/SoftSkillDropDown';
import ApplyDropdown from '../../Dropdown/ApplyDropDown';

// import TextScroller from "./TextScroller";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [applyDropdown, setApplyDropdown] = useState(false);
  const [softSkilldropdown, setSoftSkillDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const applyOnMouseEnter = () => {
    if (window.innerWidth < 960) {
      setApplyDropdown(false);
    } else {
      setApplyDropdown(true);
    }
  };
  const softSkillOnMouseEnter = () => {
    if (window.innerWidth < 960) {
      setSoftSkillDropdown(false);
    } else {
      setSoftSkillDropdown(true);
    }
  };

  const applyOnMouseLeave = () => {
    if (window.innerWidth < 960) {
      setApplyDropdown(false);
    } else {
      setApplyDropdown(false);
    }
  };
  const softSKillOnMouseLeave = () => {
    if (window.innerWidth < 960) {
      setSoftSkillDropdown(false);
    } else {
      setSoftSkillDropdown(false);
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
              
              <img className='logo' src="\img\logo.jpg" alt='logo'/>
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
              onMouseEnter={softSkillOnMouseEnter}
              onMouseLeave={softSKillOnMouseLeave}>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                SoftSkills <i className='fas fa-caret-down' />
              </Link>
              {softSkilldropdown && <SoftSkillDropDown />}
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
              onMouseEnter={applyOnMouseEnter}
              onMouseLeave={applyOnMouseLeave}
            >
              <Link
                to='/Application'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Apply <i className='fas fa-caret-down' />
              </Link>
              {applyDropdown && <ApplyDropdown />}
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' buttonLink="/Login">SignUp</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
