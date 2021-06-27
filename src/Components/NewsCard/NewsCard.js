import React from "react";
import { Link } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import "./NewsCard.css";

const News = (props) => {
  var info_url = props.news_url;
  return (
    <div class="main" id="news">
      <Card style={{ width: "20rem", height: "36rem", marginRight: "20px" }}>
        <Card.Img src={props.img} />
        <Card.Body>
          <Card.Title>
            <b className="card-title">{props.title}</b>
          </Card.Title>
          <Card.Text>
            <h5 className="card-date">{props.date}</h5>
            <p className="card-description">{props.desc}</p>
          </Card.Text>
          <button
            className="card-button"
            onClick={() => window.open(info_url, "_blank")}
          >
            Read More
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
