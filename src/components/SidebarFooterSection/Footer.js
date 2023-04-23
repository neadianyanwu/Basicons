import { Basicons, CoffeeTeaAlt, Download, EmailMessageInbox, Link, XCloseDelete } from "react-basicons";

// import SideBarNav from "../SideBarNav Section/SideBarNav";
import "./Footer.css";

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-content">
            <p>Licensed under the MIT licence.</p>
            <p>Copyright &copy; 2020-present.</p>
        </div>

        {/* <nav>
          <div className="hamburger">
              <ul className="basicons-menu">
                <li className="nav-item"> 
                  <a href="#" className="nav-link"><Download />Download 326 Icons</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link"><Basicons /> Suggest an Icon</a>
                </li>
                <li className="nav-item">
                <a a href="#" className="nav-link"><EmailMessageInbox /> Get updates</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link"><CoffeeTeaAlt /> Buy us a coffee</a>
                </li>
              </ul>
          </div>
        </nav> */}

        {/* SideBarNav Section: Starts */}
          {/* <SideBarNav /> */}
        {/* SideBarNav Section: Ends  */}
    </footer>


  )
}

export default Footer;