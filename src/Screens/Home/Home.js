import React from "react";
import Typed from "react-typed";
import covid from "./covid.gif";
import "./Home.css";

const Home = () => {
  return (
    <div class="main" id="home">
      <div className="container">
        <div className="setting-home">
          <div className="col-sm-6 written-content">
            <h1 className="home-head">
              Let's defeat <b className="covid">COVID-19</b>
            </h1>
            <p className="home-content">
              If you plan on customizing the Bootstrap Sass files, or don't want
              to use a CDN for the stylesheet, it may be helpful to install
              vanilla Bootstrap as well.
            </p>
            <p style={{ fontSize: "20px" }}>
              Stay{" "}
              <Typed
                class="typed-text"
                style={{ fontSize: "20px" }}
                strings={["Home", "Safe"]}
                typeSpeed={50}
                backSpeed={40}
                loop
              />
            </p>
          </div>
          <div className="col-sm-6 video">
            <img className="video-responsive" src={covid} alt="Covid ball" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
