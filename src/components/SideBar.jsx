import React, { useState } from "react";
import "./SideBar.css";
import { SiTwitter } from "react-icons/si";
import { RiHome7Fill } from "react-icons/ri";
import { HiHashtag } from "react-icons/hi";
import { VscBell } from "react-icons/vsc";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiFileListLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { CgMoreO } from "react-icons/cg";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaFeatherAlt } from "react-icons/fa";
import SideBarOptions from "./SideBarOptions";

function SideBar() {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="sidebar">
      <div className="logo">
        <SiTwitter className="twitter-logo" size={35} />
      </div>

      <div className="sidebar-options">
        <SideBarOptions
          isActive={activeTab === 0}
          Icon={RiHome7Fill}
          text="Home"
          onTabClick={() => handleClick(0)}
        />
        <SideBarOptions
          isActive={activeTab === 1}
          Icon={HiHashtag}
          text="Explore"
          onTabClick={() => handleClick(1)}
        />
        <SideBarOptions
          isActive={activeTab === 2}
          Icon={VscBell}
          text="Notifications"
          onTabClick={() => handleClick(2)}
        />
        <SideBarOptions
          isActive={activeTab === 3}
          Icon={MdOutlineMailOutline}
          text="Messages"
          onTabClick={() => handleClick(3)}
        />
        <SideBarOptions
          isActive={activeTab === 4}
          Icon={RiFileListLine}
          text="Lists"
          onTabClick={() => handleClick(4)}
        />
        <SideBarOptions
          isActive={activeTab === 5}
          Icon={FaRegBookmark}
          text="Bookmarks"
          onTabClick={() => handleClick(5)}
        />
        <SideBarOptions
          isActive={activeTab === 6}
          Icon={HiOutlineUser}
          text="Profile"
          onTabClick={() => handleClick(6)}
        />
        <SideBarOptions
          isActive={activeTab === 7}
          Icon={CgMoreO}
          text="More"
          onTabClick={() => handleClick(7)}
        />
      </div>

      <div className="feather-icon">
        <FaFeatherAlt className="feather" size={25} />
      </div>
      <div className="tweet-btn">
        <button className="btn">Tweet</button>
      </div>

      <div className="profile-img-md">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000"
          alt="Profile Picture"
        />
      </div>
      <div className="sidebar-footer">
        <div className="profile-img">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000"
            alt="Profile Picture"
          />
        </div>
        <div className="profile-details">
          <div className="name">Aditya Shinde</div>
          <div className="username">@AdityaS13018...</div>
        </div>
        <FiMoreHorizontal className="more" size={25} />
      </div>
    </div>
  );
}

export default SideBar;
