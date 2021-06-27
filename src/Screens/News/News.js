import React, { useEffect, useState } from "react";
import live from "./Live.gif";
import NewsCard from "../../Components/NewsCard/NewsCard";
import axios from "axios";

import { Container, Card, Row, Col } from "react-bootstrap";
import "./News.css";
import Slider from "react-slick";
// import { Link } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=f56265da815940c781ee2ac47e3f1109"
      )
      .then((res) => {
        setNewsData(res.data.articles);
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

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
        <div className="clearfix mt-5 mb-2 live-update">
          <div>
            <img className="live-responsive" src={live} alt="Covid ball" />
          </div>
          <div>
            <h4 className="News-Head">Live Updates</h4>
          </div>
        </div>
        <div style={{flexDirection: 'row', display: 'flex'}}>
          {newsData.map((news) => {
            return (
              <NewsCard
                img={news.urlToImage}
                title={news.title}
                date={news.publishedAt}
                desc={news.description}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default News;
{
  /* <Row>
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
        </Row> */
}
