import React from "react";

import { Container } from "react-bootstrap";
import "./NewsCard.css";

const News = (props,url) => {
  return (
    <div class="main" id="news">
      <Container>
        <div className="news-card">
          <img src={props.img} className="card-img" />
          <div style={{padding: '5px'}}>

          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-date">{props.date}</h6>
          <p className="card-description">{props.desc}</p>
          <button className="card-button" >Read more</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default News;
