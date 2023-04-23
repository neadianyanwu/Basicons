import { useState } from "react";
import "./NavBar.css";

import Hero from "../HeroSection/Hero";
import SearchBar from "../SearchBarSection/SearchBar";
import MainFooter from "../MainFooter Section/MainFooter";
import { SVG_ICONS } from "../../ExportIcons Section/ExportIcons";
import { getSubStringName } from "../../utils";



const NavBar = () => {

  const [svgSize, setSvgSize] =useState('16px');

  return (
    <div className="header">
        <nav className="nav-bar">
            <h2><a href="#" className="logo">
                Basicons
            </a></h2>
        </nav>
        
        {/* Hero Section: Starts */}
            <Hero />
        {/* Hero Section: Ends */}

        {/* SearchBar Section: Starts */}
          <SearchBar />
        {/* SearchBar Section: Ends  */}

        {/* Svg Section: Starts */}
      
        <div className="icons">
          {Array.isArray(SVG_ICONS) && SVG_ICONS?.map((svgIcon) => {
          const Icon = svgIcon?.icon; 
            return (
              
                <div className="icons-content">
                  <Icon width={svgSize} height={svgSize} />
                   <span className="icon-fontsize">{getSubStringName(svgIcon.slug, 10)}</span>
                </div>  
           )
        })}
        </div>
       
        

        {/*SVG Section: Ends  */}

        {/* Footer Section: Starts  */}
         <MainFooter />
        {/* Footer Section: Ends  */}
          
    </div>
  )
}

export default NavBar;