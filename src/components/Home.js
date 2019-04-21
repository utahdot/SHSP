import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <>
        <header>
          <div className="overlay" />
          <video
            playsInline="playsinline"
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
            src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
            type="video/mp4"
          />
          <div className="container h-100">
            <div className="d-flex h-100 text-center align-items-center">
              <div className="w-60 text-dark bg-light">
                <img
                  src="img/shsp.JPG"
                  className="float-left ml-4"
                  alt="Strategic Highway Safety Plan"
                />
                <h3 className="mb-0">Strategic Highway</h3>
                <h1 className="display-3 text-danger font-weight-bold">
                  Safety Plan
                </h1>
                <p className="mb-0">Version 5.0</p>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Home;
