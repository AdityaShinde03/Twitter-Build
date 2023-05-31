import React, { useState } from 'react'
import "./NavBar.css";

const NavBar = () => {
    const [acitveTab,setActiveTab] = useState(0);

    const handleClick = (index)=>{
        setActiveTab(index);
    }
  return (
    <div className='navbar'>
    <div className="navbar-heading">
        Home
    </div>
    <div className="navbar-tabs">
        <div className="navbar-tab"  onClick={()=>handleClick(0)}>
            <div className="nav-tab">
                <div className={acitveTab === 0 ? "active-span" : "tab"}>
                    <span >For You</span>
                    <div className={acitveTab === 0 ? "active-tab":""}></div>
                </div>
            </div>
        </div>
        <div className="navbar-tab" onClick={()=>handleClick(1)}>
            <div className="nav-tab">
                <div className={acitveTab === 1 ? "active-span" : "tab"}>
                    <span>Following</span>
                    <div className={acitveTab === 1 ? "active-tab":""}></div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default NavBar