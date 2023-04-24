import SideBarNav from "../SideBarNav Section/SideBarNav";
import "./Footer.css";

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-content">
            <p>Licensed under the MIT licence.</p>
            <p>Copyright &copy; 2020-present.</p>
        </div>

        {/* SideBarNav Section: Starts */}
          <SideBarNav /> 
        {/* SideBarNav Section: Ends  */}
    </footer>


  )
}

export default Footer;