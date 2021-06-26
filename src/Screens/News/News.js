import React from "react";
import live from "./Live.gif";
import news from './newsimg.jpg';

import { Container, Card, Row, Col } from "react-bootstrap";
import "./News.css";
import Slider from "react-slick";
// import { Link } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const News = () => {
  var Scroll_set = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div class="main" id="news">
      <Container>
        <div className="clearfix mt-5 mb-2 live-update" >
          <div>
          <img className="live-responsive" src={live} alt="Covid ball" />
          </div>
          <div>
            <h4 className="News-Head">Live Updates</h4>
          </div> 
        </div>
        <div>
          <div className="news-card">
            <img src={news} className="card-img" />
            <h5 className="card-title">Title will be shown</h5>
            <h6 className="card-date">24/06/2022</h6>
            <p className="card-description">If you plan on customizing the Bootstrap Sass files, or don't want to use a CDN for the stylesheet, it may be helpful to install vanilla Bootstrap as well.</p>
            <button className="card-button">Read more</button>
          </div>
        </div>
 
          
        
      </Container>
    </div>
  );
};

export default News;
{/* <Row>
          <Slider {...Scroll_set}>
          {movie.map(function(movie) {
            return(
            <React.Fragment>
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={news}
                  />
                  <Card.Body>
                    <span>TITLE</span>
                  </Card.Body>
                </Card>
              </Col>
            </React.Fragment>
            );
        })}
          </Slider>
        </Row> */}