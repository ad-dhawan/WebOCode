import React from "react";
import "./Symptoms.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import vid1 from "../../Assets/precaution1.mp4"
import vid2 from "../../Assets/precaution2.mp4"
import vid3 from "../../Assets/precaution3.mp4"
import vid4 from "../../Assets/precaution4.mp4"
import vid5 from "../../Assets/precaution5.mp4"
import boy from "../../Assets/boywithmask.mp4"
import vid6 from "../../Assets/symptom1.mp4"
import vid7 from "../../Assets/symptom2.mp4"
import vid8 from "../../Assets/symptom3.mp4"
import vid9 from "../../Assets/symptom4.mp4"
import vid10 from "../../Assets/symptom5.mp4"

import Tabs from '../../Components/Tabs/Tabs'


const Symptoms = () => {
  return (
    <div class="main" id="symptoms"> 
    <Tabs />
  {/* <div class="center">
  <video autoPlay loop muted height="180">
  <source src={vid5} type="video/mp4"/> 
  </video> </div>
  <div class="precautions">
  <div class="left">
    <video autoPlay loop muted height="180" >
  <source src={vid1} type="video/mp4"/> 
  </video>
  <video autoPlay loop muted width="200" height="200">
    <source src={vid2} type="video/mp4"/>
</video></div>
<div class="boy">
    <video autoPlay loop muted height="180">
  <source src={boy} type="video/mp4"/> 
  </video></div>
  <div class="right">
<video autoPlay loop muted width="200" height="200">
    <source src={vid3} type="video/mp4"/>
</video>
<video autoPlay loop muted width="200" height="200">
    <source src={vid4} type="video/mp4"/>
</video>
</div>
  </div>
  <div class="center">
  <video autoPlay loop muted height="180">
  <source src={vid6} type="video/mp4"/> 
  </video> </div>
  <div class="symptoms">
  <div class="left">
    <video autoPlay loop muted height="180" >
  <source src={vid7} type="video/mp4"/> 
  </video>
  <video autoPlay loop muted width="200" height="200">
    <source src={vid8} type="video/mp4"/>
</video></div>
<div class="boy">
    <video autoPlay loop muted height="180">
  <source src={boy} type="video/mp4"/> 
  </video></div>
  <div class="right">
<video autoPlay loop muted width="200" height="200">
    <source src={vid9} type="video/mp4"/>
</video>
<video autoPlay loop muted width="200" height="200">
    <source src={vid10} type="video/mp4"/>
</video>
</div>
  </div> */}
</div>
    
      );
};

export default Symptoms;
