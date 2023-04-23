import "./Collect.css";

import React from 'react';

const Collect = () => {
  
  return (
    <div className="collect-container">
      <div className="collect-header">
        <h5>Collect</h5>
      </div>

      <div className="collect-button">
        <button className="btn btn1">Download</button>
        <button className="btn btn2">Copy</button>
      </div>
    </div>
  )
}

export default Collect;