import React, { Component } from "react";


class Home extends Component {
  render() {
    return (
      <header>
        <div className="overlay" >
        <iframe src="https://player.vimeo.com/video/371197834?background=1&autoplay=1&loop=1&byline=0&title=0"
           frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <div className="container h-100">
          <div className="d-flex h-100 align-items-center">
            <div className="container col-8 justify-content-center text-dark bg-light text-center highlight-bar-top">
              <img src="img/utah.svg" className="utah_logo" />
              <h2 className="uppercase font-weight-bold">Strategic Highway</h2>
              <h1 className="display-3 text-danger font-weight-bold uppercase">Safety Plan</h1>
              <p className="version uppercase">Version 5.0</p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Home;
