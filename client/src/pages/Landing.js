import React, { Component } from 'react'

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="vimeo-wrapper">
          <iframe
            title="spinning earth"
            src="https://player.vimeo.com/video/374576663?background=1&autoplay=1&loop=1&title=0&byline=0&portrait=0"
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
          ></iframe>
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
            <div className="card col-sm-12 shadow mb-5">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12 col-md-4 d-flex flex-column justify-content-center card-line">
                    <div className="row">
                      <p className="mx-auto text-block">What is</p>
                    </div>
                    <div className="row">
                      <p className="mx-auto text-script">Neighborly?</p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-8">
                    <p className=" card-p">
                      Neighborly is a service that creates a global community by
                      matching volunteers to volunteer opportunies with both
                      organizations or individual people in need. There is so
                      much help needed in the world. You can feed the homeless,
                      cleanup the environment, save endangered animals, or
                      simply carry groceries or mow the lawn for an ederly or
                      disabled person that can no longer do it themselves.
                    </p>

                    <p className=" card-p">
                      Neighborly also helps organizations that need groups of
                      volunteers to find all the help they'll need by mathcing
                      them to available volunteers in their area, and by bring
                      visibility to their planned event so that interested
                      people in the community can volunteer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">

            <div className="row d-flex justify-content-center">
              <div class="card col-sm-12 shadow mb-5">
                <div class="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-md-4 d-flex flex-column justify-content-end p-0" id="img-puppy">

                    </div>
                    <div className="col-sm-12 col-md-8">
                      <h4 className="card-title text-block">Local Community</h4>
                      <p className="card-text">
                        Support your local community by engaging in events throughout your neighborhood. Sign up for a shift at a food bank, register your company for a volunteer day, or help a neighbor in need.
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center">
              <div class="card col-sm-12 shadow mb-5">
                <div class="card-body">
                  <div className="row">

                    <div className="col-sm-12 col-md-8">
                      <h4 className="card-title text-block">Global Outreach</h4>
                      <p className="card-text">
                        When ready, you can find opportunies around the globe,
                        step out into the world on a bigger scale by traveling the
                        world conquering world hunger, disease, disaster recovery,
                        humanitarian missions.
                    </p>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column justify-content-end p-0" id="img-global">

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center mb-5">
              <div class="card col-sm-12 shadow">
                <div class="card-body">
                  <div className="row">
                    <div className="col-sm-12 col-md-4 d-flex flex-column justify-content-end p-0" id="img-env">

                    </div>

                    <div className="col-sm-12 col-md-8">
                      <h4 className="card-title text-block">Environmental Conservation</h4>
                      <p className="card-text">
                        The planet could always use more help. Find local or
                        global opportunies to do your part. Help endangered
                        species, communities in extreme poverty, etc. by
                        protecting or cleaning up their.
                    </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>
    );
  }
}

export default Landing;
