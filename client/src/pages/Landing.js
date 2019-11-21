import React, { Component } from 'react'

class Landing extends Component {
  render() {
    return (
      
      <div>
        <div className="vimeo-wrapper">
          <iframe title="spinning earth" src="https://player.vimeo.com/video/374576663?background=1&autoplay=1&loop=1&title=0&byline=0&portrait=0"  frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div> 
        <script src="https://player.vimeo.com/api/player.js"></script>

        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="title mt-5">Neighborly</h1>
            </div>
          </div>
        
          <div className="row d-flex justify-content-between">
            <div className="col-xs-1 col-sm-3 img-boxes p-0" id="img-box1">
              <p className="text-upper">Local</p>
              <p className="text-lower">Community</p>
              <img className="img-fluid img-hero" src="./assets/images/local.jpg" alt="volunteer with puppy" />
              
            </div>
            <div className="col-xs-1 col-sm-3 img-boxes p-0" id="img-box2">
              <p className="text-upper">Global</p>
              <p className="text-lower">Outreach</p>
              <img className="img-fluid img-hero" src="./assets/images/global.jpg" alt="volunteer with child" />
            </div>
            <div className="col-xs-1 col-sm-3 img-boxes p-0" id="img-box3">
              <p className="text-upper">Environmental</p>
              <p className="text-lower">Conservation</p>
              <img className="img-fluid img-hero" src="./assets/images/cleanup.jpg" alt="clean up of oil spill" />
            </div>
          </div>
        </div>
        
        

      </div>
      
    )
  }
}

export default Landing
