import React from "react";
import './Symptoms.css'
import Pulse from 'react-reveal/Pulse'

import vid1 from "../../../Assets/precaution1.mp4"
import vid2 from "../../../Assets/precaution2.mp4"
import vid3 from "../../../Assets/precaution3.mp4"
import vid4 from "../../../Assets/precaution4.mp4"
import vid5 from "../../../Assets/precaution5.mp4"
import boy from "../../../Assets/boywithmask.mp4"

const Symptoms = () => {
  return (
    <Pulse>

    <div style={{marginTop: '5%'}}>
      <div class="center">
        <video autoPlay loop muted height="180">
          <source src={vid5} type="video/mp4" />
        </video>{" "}
      </div>
      <div class="precautions">
        <div class="left">
          <video autoPlay loop muted height="180">
            <source src={vid1} type="video/mp4" />
          </video>
          <video autoPlay loop muted width="200" height="200">
            <source src={vid2} type="video/mp4" />
          </video>
        </div>
        <div class="boy">
          <video autoPlay loop muted height="180">
            <source src={boy} type="video/mp4" />
          </video>
        </div>
        <div class="right">
          <video autoPlay loop muted width="200" height="200">
            <source src={vid3} type="video/mp4" />
          </video>
          <video autoPlay loop muted width="200" height="200">
            <source src={vid4} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
    </Pulse>
  );
};

export default Symptoms;
