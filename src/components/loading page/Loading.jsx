import React from 'react';
import "./Loading.css"

 let mode =localStorage.getItem("currentMode")
 console.log(mode)

const Loading = () => {
    return (
<div className="Loading-container">
  <div className="box1" style={{border: mode==="light" ? "16px solid #1976d2" : "16px solid #90caf9"}}></div>
  <div className="box2" style={{border: mode==="light" ? "16px solid #1976d2" : "16px solid #90caf9"}}></div>
  <div className="box3" style={{border: mode==="light" ? "16px solid #1976d2" : "16px solid #90caf9"}}></div>
</div>
    );
}

export default Loading;
