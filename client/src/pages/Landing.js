import React, { Component } from 'react'

class Landing extends Component {
  render() {
    return (
      
      <div>
        <div className="vimeo-wrapper">
          <iframe title="spinning earth" src="https://player.vimeo.com/video/374576663?background=1&autoplay=1&loop=1&title=0&byline=0&portrait=0"  frameborder="0" allow="autoplay" allowfullscreen></iframe>
        </div> 
        <script src="https://player.vimeo.com/api/player.js"></script>

        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <h1 className="title mt-1 mb-5">Neighborly</h1>
            </div>
          </div>
          <div className="row spacer my-5"></div>
          <div className="row d-flex justify-content-center">
            <div class="card col-sm-12 shadow">
              <div class="card-body">
                <div className="row">
                  <div className="col-sm-12 col-md-4 d-flex flex-column justify-content-center card-line">
                    <div className="row"><p className="mx-auto text-block">What is</p></div>
                    <div className="row"><p className="mx-auto text-script">Neighborly?</p></div>
                  </div>
                  <div className="col-sm-12 col-md-8">
                    <p className=" card-p">Neighborly is a service that creates a global community by matching volunteers to volunteer opportunies with both organizations or individual people in need.  There is so much help needed in the world.  You can feed the homeless, cleanup the environment, save endangered animals, or simply carry groceries or mow the lawn for an ederly or disabled person that can no longer do it themselves.</p>
                  
                    <p className=" card-p">Neighborly also helps organizations that need groups of volunteers to find all the help they'll need by mathcing them to available volunteers in their area, and by bring visibility to their planned event so that interested people in the community can volunteer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <div class="card col-sm-6 shadow">
              <div class="card-body p-0">
                <div className="row">
                  <div className="col-sm-12 col-md-5 d-flex flex-column justify-content-center p-0" id="img-local">
                    {/* <img className=" img-fit" src="./assets/images/local.jpg" alt="volunteer with puppy" /> */}
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="row">
                      <div className="col">
                        <p className="card-p text-block p-0">Local</p>
                      </div>
                      <div className="col">
                        <p className="card-p text-script p-0">Community</p>
                      </div>
                    </div>
                    <div className="row">
                      <p className=" card-p">Neighborly is a service that creates a global community by matching volunteers to volunteer opportunies with both organizations or individual people in need.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-between">
            <div className="col-sm-12 col-md-4 img-boxes p-0" id="img-box1">
              <p className="text-upper">Local</p>
              <p className="text-lower">Community</p>
              <img className="img-fluid img-hero" src="./assets/images/local.jpg" alt="volunteer with puppy" />

            </div>
            <div className="col-sm-12 col-md-4 img-boxes p-0" id="img-box2">
              <p className="text-upper">Global</p>
              <p className="text-lower">Outreach</p>
              <img className="img-fluid img-hero" src="./assets/images/global.jpg" alt="volunteer with child" />
            </div>
            <div className="col-sm-12 col-md-4 img-boxes p-0" id="img-box3">
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
