import React from 'react'
import "./Feed.css"
import NavBar from './NavBar'
import TweetBox from './TweetBox'

const Feed = () => {
  return (
    <div className='feed'>
    <NavBar />
    <TweetBox />
    </div>
  )
}

export default Feed