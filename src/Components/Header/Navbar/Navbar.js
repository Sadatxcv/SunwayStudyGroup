import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "../../Button/Button";
import ProgramDropDown from "../../Dropdown/ProgramDropDown";
import ApplyDropdown from "../../Dropdown/ApplyDropDown";
import UniversityDropdown from "../../Dropdown/UniversityDropdown";
import AboutUsDropdown from "../../Dropdown/AboutUsDropDown";
import MediaDropdown from "../../Dropdown/MediaDropDown";

// import TextScroller from "./TextScroller";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [aboutUsDropdown, setAbouUsDropdown] = useState(false);
  const [applyDropdown, setAppllyDropdown] = useState(false);
  const [programsDropdown, setprogramsDropdown] = useState(false);
  const [universitydropdown, setuniversityDropdown] = useState(false);
  const [mediadropdown, setmediaDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const applyOnMouseEnter = () => {
    if (window.innerWidth < 960) {
      setAppllyDropdown(false);
    } else {
      setAppllyDropdown(true);
    }
  };
  const applyOnMouseLeave = () => {
    if (window.innerWidth < 960) {
      setAppllyDropdown(false);
    } else {
      setAppllyDropdown(false);
    }
  };
  const aboutUsOnMouseEnter = () => {
    if (window.innerWidth < 960) {
      setAbouUsDropdown(false);
    } else {
      setAbouUsDropdown(true);
    }
  };
  const aboutUsOnMouseLeave = () => {
    if (window.innerWidth < 960) {
      setAbouUsDropdown(false);
    } else {
      setAbouUsDropdown(false);
    }
  };
  const softSkillOnMouseEnter = () => {
    if (window.innerWidth < 960) {
      setprogramsDropdown(false);
    } else {
      setprogramsDropdown(true);
    }
  };
  const softSKillOnMouseLeave = () => {
    if (window.innerWidth < 960) {
      setprogramsDropdown(false);
    } else {
      setprogramsDropdown(false);
    }
  };
  const universityOnMouseEnter = () => {
    if (window.innerWidth < 960) {
      setuniversityDropdown(false);
    } else {
      setuniversityDropdown(true);
    }
  };
  const universityMouseLeave = () => {
    if (window.innerWidth < 960) {
      setuniversityDropdown(false);
    } else {
      setuniversityDropdown(false);
    }
  };
  const mediaOnMouseEnter = () => {
    if (window.innerWidth < 960) {
      setmediaDropdown(false);
    } else {
      setmediaDropdown(true);
    }
  };
  const mediaMouseLeave = () => {
    if (window.innerWidth < 960) {
      setmediaDropdown(false);
    } else {
      setmediaDropdown(false);
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

  window.addEventListener("resize", showButton);

  return (
    <>
      {/* <div className='textScroller'>
            <TextScroller text="Long long text to scroll" />
      </div>  */}
      <nav className="navbar">
        <div className="navbar-container">
          <ul>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img className="logo" src="\img\logo.jpg" alt="logo" />
            </Link>
          </ul>
          <ul>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
          </ul>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li
              className="nav-item"
              onMouseEnter={universityOnMouseEnter}
              onMouseLeave={universityMouseLeave}
            >
              <Link
                to="/University"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                University <i className="fas fa-caret-down" />
              </Link>
              {universitydropdown && <UniversityDropdown />}
            </li>
            <li className="nav-item">
              <Link
                to="/Scholarship"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Scholarship
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Agent" className="nav-links" onClick={closeMobileMenu}>
                Agent
              </Link>
            </li>
            <li className="nav-item"
            onMouseEnter={mediaOnMouseEnter}
            onMouseLeave={mediaMouseLeave}
            >
              <Link to="/Blog" className="nav-links" onClick={closeMobileMenu}>
                News & Media <i className="fas fa-caret-down" />
              </Link>
              {mediadropdown && <MediaDropdown/>}
            </li>
            <li
              className="nav-item"
              onMouseEnter={softSkillOnMouseEnter}
              onMouseLeave={softSKillOnMouseLeave}
            >
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Programs & Courses <i className="fas fa-caret-down" />
              </Link>
              {programsDropdown && <ProgramDropDown />}
            </li>

            <li
              className="nav-item"
              onMouseEnter={applyOnMouseEnter}
              onMouseLeave={applyOnMouseLeave}
            >
              <Link
                to="/Application"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Apply <i className="fas fa-caret-down" />
              </Link>
              {applyDropdown && <ApplyDropdown />}
            </li>
            <li
              className="nav-item"
              onMouseEnter={aboutUsOnMouseEnter}
              onMouseLeave={aboutUsOnMouseLeave}
            >
              <Link
                to="/AboutUs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us <i className="fas fa-caret-down" />
              </Link>
              {aboutUsDropdown && <AboutUsDropdown />}
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" buttonLink="/Login">
              Sign In
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
