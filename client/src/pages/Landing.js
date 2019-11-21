import React, { Component } from 'react'

class Landing extends Component {
  render() {
    return (
      
      <div>
        <div className="vimeo-wrapper">
          <iframe src="https://player.vimeo.com/video/374576663?background=1&autoplay=1&loop=1&title=0&byline=0&portrait=0"  frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div> 
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
      
    )
  }
}

export default Landing
