// React imports
import React, { useState } from 'react';

// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

// Project-specific imports
import headerLogo from '../assets/fs-logo-name.svg';
import bodyLogo from '../assets/fs-logo-icon.svg';
import  navHistory from '../assets/fs-nav-history.svg'
import  navHome from '../assets/fs-nav-home.svg'
import  navManage from '../assets/fs-nav-manage.svg'

// Style import
import '../styles/MainMenu.css';
import AboutButton from './AboutButton';
import SignInButton from './SignInButton';


function MainMenu() {
  const [isAboutButtonVisible, setIsAboutButtonVisible] = useState(false);

  const handleAboutClick = () => {
    window.open("#", "_blank");
  };

  const handleEllipsisClick = () => {
    setIsAboutButtonVisible(!isAboutButtonVisible); // Toggle button visibility
  };

  return (
    <>
      <nav className="main-nav">
        <div className="container">
          <img src={headerLogo} alt="FinStudent Logo" className="logo" />

          <i className="dots" onClick={handleEllipsisClick}>
            <FontAwesomeIcon icon={faEllipsis} />
          </i>

        </div>
      </nav>
      
      <header>
          <div className="about-container">
            {isAboutButtonVisible && (
              <AboutButton onClick={handleAboutClick} />
            )}
          </div>
      </header>

      <body>
        <div className="body-container">
          <div className="body-items">
            <img  src={bodyLogo} alt="FinStudent Logo"  className="finstudent-logo"/>
            <h1 className="mainMenuH1-title">FinStudent</h1>
            <p className="mainMenuP-subheading">The smart way to manage your 
              <br />
              finances.
            </p>
          </div>

          <div className="signin-container">
            <h3 className="sigin-description">The all-in-one app to
              <br />
              track, manage, and stay on
              <br />
              top  of your finances.
            </h3>
            <SignInButton />
          </div>   

          <div className="offers-container">
              <div className="offers-container-icons">
                <div className="navHome">
                  <img  src={navHome} alt="Navigation Bar Home Icon"  className="nav-home-icon"/>
                  <p className="hiddenText">Home</p>
                </div>

                <div className="navManage">
                  <img  src={navManage} alt="Navigation Bar Manage Icon"  className="nav-manage-icon"/>
                  <p className="hiddenText">Manage</p>
                </div>

                <div className="navHome">
                  <img  src={navHistory} alt="Navigation Bar History Icon"  className="nav-history-icon"/>
                  <p className="hiddenText">History</p>
                </div>
              </div>

              <div className="offers-descriptions">
                <p className="offers-paragraph-description offers-paragraph-divider">
                    Feeling overwhelmed by d dates, tuidion bills,
                    and miscellaneos fees? FinStudent is here to be
                    your financial wingman in the academic jungle.
                </p>

                <p className="offers-paragraph-description">
                  FinStudent takes the stress out of managing your
                  campus cash flow. FinStudent empowers you to:
                </p>

                <p className="offers-paragraph-description">
                  Track everything in one place: Keep a watchful eye 
                  on upcominf payments, deadlines, and past
                  transactions:
                </p>

                <p className="offers-paragraph-description">
                  Stay organized, stay ahead: Wave goodby to late
                  fees and scrambling for funds. FinStudent keeps 
                  you informed and inn control.
                </p>

                <p className="offers-paragraph-description">
                  Simplify your payments: Not more hunting
                  for receipts or deciphering invoices. FinStudent
                  streamlines your financial life, freeing you to focus on
                  what matters most - your studies and campus
                  experience.
                </p>
              </div>
          </div>
        </div>    
      </body>
    </>
  );
}

export default MainMenu;
