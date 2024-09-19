import React, { useState, useEffect, useRef } from 'react';
import './Dashboard.css';
import { useNavigate , useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null); // Ref for the sidebar
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setIsLoggedIn(true);
    }
  }, [location.pathname]);

  const handleprojectclick = () =>{
    navigate('/IdeaTable')
  }
  const handleSignup = () => {
    setIsLoggedIn(true);
    navigate('/Select');
  };

   const handletopdev = () =>{
    navigate('/Organization')
   }
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/login');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSidebarOpen(false);
    navigate('/');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className='bodyContainer'>
        <header className="header">
          {!isLoggedIn ? (
            <div className="authLinks">
              <button onClick={handleLogin} className='linkbtn'>Login</button>
              <button onClick={handleSignup} className='linkbtn'>Sign Up</button>
            </div>
          ) : (
            <div className="loggedInMenu">
              <div className="hamburger" onClick={toggleSidebar}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
              <div className={`sidebar ${sidebarOpen ? 'open' : ''}`} ref={sidebarRef}>
                <ul>
                  <li><a href="/Dev_Profile">Profile</a></li>
                  <li><a href="/HelpAndSupport">Help and Support</a></li>
                  <li><a href="/Idea_form">Upload Idea</a></li>
                  <li><a href="#">Request</a></li>
                </ul>
                <button className="logoutButton" onClick={handleLogout}>Logout</button>
              </div>
            </div>
          )}
        </header>
        
        <section className="infoCards">
          <div className='infoCardSection'>
            <div onClick={handleprojectclick} className="featuredBoxes">700+ Projects</div>
            <div className="featuredBoxes">500+ Organizations</div>
            <div className="featuredBoxes">1000+ Developers</div>
            <div className="featuredBoxes">300+ Investors</div>
            <div className="featuredBoxes">250+ Success Stories</div>
          </div>
        </section>

        <section className="topDevs">
          <hr />
          <div className="headingBox">Top Developers</div>
          <div className="boxes">
            <div className="devBoxes">
              <ul className='devList'>
                <li className="fields picBox"><img src="https://media.licdn.com/dms/image/v2/D4D03AQEmj4P1bx7-NA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726145174598?e=1732147200&v=beta&t=kDzZbT2y0BYYAS1_LF_3Jk6re6fxVkygcrymjFkVfmA" alt="" className='pic' /></li>
                <li className="fields">Parth panchal</li>
                <hr />
                <li className="fields">Full Stack </li>
                <hr />
                <li className="fields">MERN</li>
                <hr />
                <li className="fields">5+ years Experience</li>
                <hr />
              </ul>
            </div>
            <div className="devBoxes">
              <ul className='devList'>
                <li className="fields picBox"><img src="https://media.licdn.com/dms/image/v2/D4D03AQHbBGcdusxMgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1704263161097?e=1732147200&v=beta&t=0kTWN0CYjINKYH1ot4WCXpKTQtRxddf10cBCq_AHA6c" alt="" className='pic' /></li>
                <li className="fields">Kushmeet patil</li>
                <hr />
                <li className="fields">Mobile dev</li>
                <hr />
                <li className="fields">Flutter</li>
                <hr />
                <li className="fields">10+ years Experience</li>
                <hr />
              </ul>
            </div>
            <div className="devBoxes">
              <ul className='devList'>
                <li className="fields picBox"><img src="https://media.licdn.com/dms/image/v2/D4D35AQEFgfZ1iTbkqQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1722846928749?e=1727366400&v=beta&t=ABVF_ftmIPXcxUCG-jAKTWSOEdY27D0svlMkh-SwTpU" alt="" className='pic' /></li>
                <li className="fields">Jay</li>
                <hr />
                <li className="fields">Front end</li>
                <hr />
                <li className="fields">React</li>
                <hr />
                <li className="fields">2+ years Experience</li>
                <hr />
              </ul>
            </div>
          </div>
        </section>

        <section className="topDevs">
          <hr />
          <div className="headingBox">Top Investors</div>
          <div className="boxes">
            <div className="devBoxes">
              <ul className='devList'>
                <li className="fields picBox"><img src="https://media.licdn.com/dms/image/v2/D4D35AQG2fXzbhGegBQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1722437972951?e=1727366400&v=beta&t=UvbQIsru46uB0FHELWg1jLjB5JrcFwqfIl9HKC76oEM" alt="" className='pic' /></li>
                <li className="fields">Mayank mayavanshi</li>
                <hr />
                <li className="fields">Focus: Tech Startups</li>
                <hr />
                <li className="fields">Fund Size: $10000</li>
                <hr />
                <li className="fields">5+ years  Experience</li>
                <hr />
              </ul>
            </div>
            <div className="devBoxes">
              <ul className='devList'>
                <li className="fields picBox"><img src="https://media.licdn.com/dms/image/v2/D5603AQE-7qpBGMG6ug/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715608917859?e=1732147200&v=beta&t=h2puKaT5W8Aw4FRVxJvlvCnTI6E6VSpjLkWdNJcPwk8" alt="" className='pic' /></li>
                <li className="fields">keya sheth</li>
                <hr />
                <li className="fields">Focus: Renewable Energy</li>
                <hr />
                <li className="fields">Fund Size: $20000</li>
                <hr />
                <li className="fields">5+ years  Experience</li>
                <hr />
              </ul>
            </div>
            <div className="devBoxes">
              <ul className='devList'>
                <li className="fields picBox"><img src="https://media.licdn.com/dms/image/v2/D5603AQGwoUHOWBSV7A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726194328932?e=1732147200&v=beta&t=RHAsb-LPXrQ6BP9fGJbRtx8-cs_lBaBAjd14nic1B3I" alt="" className='pic' /></li>
                <li className="fields">Mahek Rana</li>
                <hr />
                <li className="fields">Focus:Agriculture & Food Tech</li>
                <hr />
                <li className="fields">Fund Size: $40000</li>
                <hr />
                <li className="fields">New to  Experience</li>
                <hr />
              </ul>
            </div>
          </div>
        </section>

        <section className="topDevs">
          <hr />
          <div className="headingBox">Top Organizations</div>
          <div className="boxes">
            <div onClick={handletopdev} className="devBoxes">
              <ul className='devList'>
                <li className="fields picBox"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHLm2vHIdlaXVg20CzYz970OxiII6qgZkhg&s" alt="" className='pic' /></li>
                <li className="fields">Infochips</li>
                <hr />
                <li className="fields">BlockChain</li>
                <hr />
                <li className="fields">Founded: 2000</li>
                <hr />
                <li className="fields">Solana Gateway</li>
                <hr />
              </ul>
            </div>
            <div className="devBoxes">
              <ul className='devList'>
                <li className="fields picBox"><img src="https://media.licdn.com/dms/image/v2/C560BAQGMERIfWt3unw/company-logo_200_200/company-logo_200_200/0/1648498465814/tech_i_s_logo?e=2147483647&v=beta&t=9E0sMXBKJU5IaqS_I_xkzdcJXHh85Xkkza0_ulaBI8c" alt="" className='pic' /></li>
                <li className="fields">techis</li>
                <hr />
                <li className="fields">Cloud Computing</li>
                <hr />
                <li className="fields">Founded: 2012</li>
                <hr />
                <li className="fields">Cloud Storage Solution</li>
                <hr />
              </ul>
            </div>
            <div className="devBoxes">
              <ul className='devList'>
                <li className="fields picBox"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsIsJL3zRgUrkD3yE3lD7LK0wZWSiRyY1GVg&s" alt="" className='pic' /></li>
                <li className="fields">techyfy</li>
                <hr />
                <li className="fields">Cybersecurity</li>
                <hr />
                <li className="fields">Founded: 2009</li>
                <hr />
                <li className="fields">CRM Automation Tool</li>
                <hr />
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;