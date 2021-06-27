import React from "react";
import "./Precautions.css";
import Pulse from "react-reveal/Pulse";

import boy from "../../../Assets/boywithmask.mp4";
import vid6 from "../../../Assets/symptom1.mp4";
import vid7 from "../../../Assets/symptom2.mp4";
import vid8 from "../../../Assets/symptom3.mp4";
import vid9 from "../../../Assets/symptom4.mp4";
import vid10 from "../../../Assets/symptom5.mp4";

const Precautions = () => {
  return (
      <Pulse>
    <div style={{marginTop: '5%'}}>
        <div class="center">
          <video autoPlay loop muted height="180">
            <source src={vid6} type="video/mp4" />
          </video>{" "}
        </div>
        <div class="symptoms">
          <div class="left">
            <video autoPlay loop muted height="180">
              <source src={vid7} type="video/mp4" />
            </video>
            <video autoPlay loop muted width="200" height="200">
              <source src={vid8} type="video/mp4" />
            </video>
          </div>
          <div class="boy">
            <video autoPlay loop muted height="180">
              <source src={boy} type="video/mp4" />
            </video>
          </div>
          <div class="right">
            <video autoPlay loop muted width="200" height="200">
              <source src={vid9} type="video/mp4" />
            </video>
            <video autoPlay loop muted width="200" height="200">
              <source src={vid10} type="video/mp4" />
            </video>
          </div>
        </div>
    </div>
      </Pulse>
  );
};

export default Precautions;
