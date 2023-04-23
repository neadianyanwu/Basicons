import React from 'react';
import './MainSection.css';
import NavBar from '../NavSection/NavBar';
// import SearchBar from '../SearchBarSection/SearchBar';
// import Hero from '../HeroSection/Hero';


const MainSection = () =>{
    return(
        <div className="main-section-container">
            {/* NavBar Section: Starts */}
                <NavBar />
            {/* NavBar Section: Ends */}

            <div className="vertical-line"></div>
            
        </div>
       
    )
}

export default MainSection;