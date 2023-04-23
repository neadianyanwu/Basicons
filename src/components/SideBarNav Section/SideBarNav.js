import { Basicons, CoffeeTeaAlt, Download, EmailMessageInbox, Link, XCloseDelete } from "react-basicons";
import "./SideBarNav.css";
import { useState } from "react";

const SideBarNav = () => {

  
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    // <div className="flex justify-between items-center bg-gray-800 p-4">
    //   <ul className={`flex ${click ? 'flex-col' : 'hidden'} md:flex md:flex-column md:items-center`}>
    //     <li className="link"><a href="#"><Download /> Download 326 Icons</a></li>
    //     <li className="link"><a href="#"><Basicons /> Suggest an Icon</a></ li>
    //     <li className="link"><a href="#"><EmailMessageInbox /> Get updates</a></li>
    //     <li className="link"><a href="#"><CoffeeTeaAlt /> Buy us a coffee</a></li>
    //   </ul>
    //   <div className="basicons" onClick={handleClick}>
    //     {click ? (<XCloseDelete />) : (<Basicons />)}
    //   </div>
    // </div>

    <div className="menu-container">
        <nav className="navbar">
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
        </nav>

          <div className="basicons" onClick={handleClick}>
            {click ? (<XCloseDelete />) : (<Basicons />)}
          </div>
    </div>
  )
}

export default SideBarNav;