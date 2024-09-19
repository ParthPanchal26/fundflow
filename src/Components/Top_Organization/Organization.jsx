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
            <img src="https://www.shutterstock.com/image-photo/org-text-on-wood-cubes-260nw-1911771148.jpg" alt="" className="orgLogo" />
          </div>

          <div className="orgFields orgFieldsUnderline orgName">Name: <span className="bold">InnoVentures</span></div>
          <div className="orgFields orgFieldsUnderline orgIndustry">Industry: <span className="bold">Technology & innovation Consulting</span></div>
          <div className="orgFields orgFieldsUnderline orgLoc">Location: <span className="bold">Bengaluru, India</span></div>
          <div className="orgFields orgFieldsUnderline orgEmail">Email: <span className="bold">contact@innoventures.tech</span></div>
          <div className="orgFields orgFieldsUnderline orgMedia">Social media: <br />
            LinkedIn: <span className='links bold'>linkedin.com/comapany/innoventures</span>
            <br />
            Twitter: <span className='links bold'>twitter.com/innoventures</span>
          </div>
          <div className="orgFields orgFieldsUnderline orgMedia">
            Website: <span className="links bold">www.innoventures.tech</span>
          </div>

        </section>

        <section className="rightSection">
          <div className="orgLogoContainer rightHeading">Problem Statements</div>
          <div className="orgFields problemBox">1. Smart Agriculture Solution</div>
          <div className="orgFields problemBox">2. Sustainable Urban Mobility</div>
          <div className="orgFields problemBox">3. Remote Healthcare Access</div>
          <div className="orgFields problemBox">4. Blockchain for Transparent Supply Chain</div>
          <div className="orgFields problemBox">5. AI-Driven Education Platform</div>
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