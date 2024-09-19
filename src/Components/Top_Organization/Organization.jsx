import React, { useState } from 'react'
import './Organization.css'

const Organization = () => {

  const [isPopUp, setIsPopup] = useState(false);

  const showPopUp = () => {
    setIsPopup(true)
  }

  const closePopUp = () => {
    setIsPopup(false)
  }

  return (
    <>
      <div className="orgContainer">

        <section className="orgInfoContainer">

          <div className="orgLogoContainer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHLm2vHIdlaXVg20CzYz970OxiII6qgZkhg&s" alt="" className="orgLogo" />
          </div>

          <div className="orgFields orgFieldsUnderline orgName">Name: <span className="bold">eInfoChips</span></div>
          <div className="orgFields orgFieldsUnderline orgIndustry">Industry: <span className="bold">Blockchain</span></div>
          <div className="orgFields orgFieldsUnderline orgLoc">Location: <span className="bold">Bengaluru, India</span></div>
          <div className="orgFields orgFieldsUnderline orgEmail">Email: <span className="bold">contact@einfochips.tech</span></div>
          <div className="orgFields orgFieldsUnderline orgMedia">Social media: <br />
            LinkedIn: <span className='links bold'>linkedin.com/comapany/einfochips</span>
            <br />
            Twitter: <span className='links bold'>twitter.com/einfochips</span>
          </div>
          <div className="orgFields orgFieldsUnderline orgMedia">
            Website: <span className="links bold">www.einfochips.tech</span>
          </div>

        </section>

        <section className="rightSection">
          <div className="orgLogoContainer rightHeading">Problem Statements</div>
          <div className="orgFields problemBox">1. Blockchain Based Data Privacy For Healthcare</div>
          <div className="orgFields problemBox">2. Decentralized Identity Management</div>
          <div className="orgFields problemBox">3. Supply Chain Transparency with Blockchain</div>
          <div className="orgFields problemBox">4. Smart Contract-Based Legel Automation</div>
          <div className="orgFields problemBox">5. Blockchain-Based Voting System</div>
          <button className="orgFields problemBox" onClick={showPopUp}>Approach Organization</button>
        </section>

        {isPopUp && (
          <section className='popup'>
            <div className="fields">
              <div className="close"><span className="closeBtn" onClick={closePopUp} >X</span></div>
              <input type="text" className="field" placeholder='Problem Statement ID' />
              <input type="text" className="field" placeholder='Your userName' />

              <div className="fileBox">
                <label htmlFor="file" className='file'>Your Prototype</label>
                <input type="file" id='file' className="field file" />
              </div>

              <input type="submit" className="field submit" />
            </div>
          </section>
        )
        }

      </div>
    </>
  )
}

export default Organization