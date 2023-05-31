import React, { useState } from "react";
import "./TweetBox.css";
import { BsEmojiSmile } from "react-icons/bs";
import { RxImage } from "react-icons/rx";
import { TbGif } from "react-icons/tb";
import { CgPoll } from "react-icons/cg";
import { BsCalendar } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";


const TweetBox = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const handleClick = () => {
    setShowEmoji(!showEmoji);
  };
  return (
    <div className="tweetbox">
      <div className="tweet-box">
        <div className="tweetbox-profile">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000"
            alt="profile picture"
          />
        </div>
        <div className="tweetbox-input">
          <input type="text" placeholder="What is happening?!" />
        </div>
      </div>
      <div className="tweetbox-icons">
        <div className="icons">
          <div className="icon-area">
            <RxImage className="icon" />
          </div>
          <div className="icon-area">
            <TbGif className="icon" />
          </div>
          <div className="icon-area">
            <CgPoll className="icon" />
          </div>
          <div className="icon-area" onClick={handleClick}>
            <BsEmojiSmile className="icon" />
          </div>
          <div className="icon-area">
            <BsCalendar className="icon" />
          </div>
          <div className="icon-area">
            <BiMap className="icon" />
          </div>
          {showEmoji && <div className="emoji-picker"><Picker className="picker" /></div>}
        </div>
        <button className="tweetbox-btn">Tweet</button>
      </div>
    </div>
  );
};

export default TweetBox;
