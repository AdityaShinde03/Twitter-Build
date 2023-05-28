import React from 'react'
import "./SideBarOptions.css"

const SideBarOptions = ({Icon, text, isActive, onTabClick}) => {
  return (
    <div className={`sidebar-option ${isActive ? "active": ""}`} onClick={onTabClick}>
        <Icon className="icon" size={30}/>
        <p className='title'>{text}</p>
    </div>
  )
}

export default SideBarOptions