import React from 'react';
import './Sidebar.css'
import Customize from '../CustomizeSection/Customize';



const Sidebar = () =>{
    return(
        <div className="sidebar-container">
            
            {/* Customize Section: Starts */}
                <Customize />
            {/* Customize Section: Ends */}
        </div>
        
    )
}

export default Sidebar;
