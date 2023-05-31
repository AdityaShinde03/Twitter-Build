import React, { useState } from 'react'
import "./Feed.css"
import NavBar from './NavBar'
import TweetBox from './TweetBox'
import Post from './Post';

const Feed = () => {
  return (
    <div className='feed'>
    <NavBar />
    <TweetBox />
    <div className="show-tweets">
      <div className="tweets">Show 315 Tweets</div>
    </div>
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    </div>
  )
}

export default Feed