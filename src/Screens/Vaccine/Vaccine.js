import React from "react";
import vaccine from "./vaccine.gif";
import "./Vaccine.css";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div class="main" id="vaccine">
      <Fade big>
        <div className="container">
          <div className="setting-home">
            <div className="col-sm-6 written-content">
              <h1 className="home-head">
                Get yourself <b className="covid">Vaccinated</b>
              </h1>
              <p className="home-content">
                COVID 19-vaccines are effective. They can keep you from getting
                and spreading the virus that causes COVID-19.COVID-19 vaccines
                also help keep you from getting seriously ill even if you do get
                COVID-19. Getting vaccinated yourself may also protect people
                around you.
              </p>
              <p className="home-content">
                Get your slot booked at{" "}
                <a href="https://www.cowin.gov.in/home">
                  https://www.cowin.gov.in/home
                </a>
              </p>
            </div>
            <div className="col-sm-6 video">
              <img
                className="video-responsive"
                src={vaccine}
                alt="Covid ball"
              />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
