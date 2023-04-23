import { MoonNight, SunDay } from "react-basicons";
import "./Customize.css";
import Size from "../SizeSection/Size";

import React, { useEffect, useState } from 'react'
import Collect from "../CollectSection/Collect";
import Code from "../CodeSection/Code";
import Footer from "../SidebarFooterSection/Footer";

const Customize = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    useEffect (() => {
        const body =document.body;
        if (darkMode) {
          body.classList.add("dark-mode");
        } else {
          body.classList.remove("dark-mode");
        }
      }, [darkMode]);

  return (

    <div className="customize-container">
      <div className="content-container">
        <h4>Customize</h4>
       <div className="customize-button-section">
          <div className="button">
            <button onClick={handleDarkModeToggle}>
                {darkMode ? <SunDay /> : <MoonNight /> }
            </button>
          </div>

          {/* Section: Reset Button */}
          <div>
            <button className="btn">Reset</button>
          </div>
        </div>
      </div>
        {/* Size Section: Starts */}
          <Size />
        {/* Size Section: Ends */}
        <div className="hr"></div>
        {/* Collect Section: Starts */}
          <Collect />
          {/* Collect Section: Ends  */}
        <div className="hr"></div> 
         {/* Code Section: Starts  */}
          <Code />
        {/* Code Section: Ends  */}
        <div className="hr"></div>
        {/*  Footer Section: Starts */}
          <Footer />
          
    </div>
  )
}

export default Customize;