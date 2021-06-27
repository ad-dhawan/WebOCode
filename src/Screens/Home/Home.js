import React from "react";
import "./Home.css";
import ball from "../../Assets/covidball.mp4";

const Home = () => {
  return (
    <div class="main" id="home">
      <div className="container">
        <div className="setting-home">
          <div className="col-sm-6 written-content">
            <h1 className="home-head">Let's defeat <b className="covid">COVID-19</b></h1>
            <p className="home-content">
              If you plan on customizing the Bootstrap Sass files, or don't want
              to use a CDN for the stylesheet, it may be helpful to install
              vanilla Bootstrap as well.
            </p>
          </div>
          <div className="col-sm-6 video">
          <video autoPlay loop muted height="500">
  <source src={ball} type="video/mp4"/> 
  </video>
            {/*  
          <img className="video-responsive" src={ball} alt="Covid ball" />*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
