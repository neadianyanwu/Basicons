import { Basicons, CoffeeTeaAlt, Download, EmailMessageInbox, Link, XCloseDelete } from "react-basicons";
import "./SideBarNav.css";
import { useState } from "react";

const SideBarNav = () => {

  
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
   
    <div className="menu-container">
        {click && <nav className="navbar">
          <ul className="basicons-menu">
            <li className="nav-item"> 
              <a href="#" className="nav-link"> <Download /> Download 326 Icons</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"> <Basicons /> Suggest an Icon</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"> <EmailMessageInbox /> Get updates</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"> <CoffeeTeaAlt /> Buy us a coffee</a>
            </li>
          </ul>
        </nav>}

          <div className="basicons" onClick={handleClick}>
            {click ? (<XCloseDelete />) : (<Basicons />)}
          </div>
    </div>
  )
}

export default SideBarNav;