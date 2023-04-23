import "./Hero.css";
import { CodeTechDev, Download } from "react-basicons";

import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-content">
            <h1>Basic icons for product design & development</h1>
            <p>326+ icons . Growing collection . 24 x 24 pixel perfect</p>
        </div>

        <div className="button-container">
            <button className="download-button"><a href="#"><Download /> Download all</a></button>
            <button className="button1"><a href="#"><CodeTechDev /> Documentation</a></button>
        </div>
    </div>
  )
}

export default Hero;