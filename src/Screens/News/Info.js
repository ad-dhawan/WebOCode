import React, { useState, useEffect } from "react";
import NewsCard from "../../Components/NewsCard/NewsCard";
import axios from "axios";
import "./News.css";
import live from "./Live.gif";

import { useWindowScroll } from "react-use";

const NewsInfo = () => {
  const [newsData, setNewsData] = useState([]);

  let component = [];

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

  return (
    <div id="news">
      <div className="clearfix mt-5 mb-2 live-update">
        <div>
          <img className="live-responsive" src={live} alt="ball" />
        </div>
        <div>
          <h4
            className="News-Head"
            style={{ fontSize: "70px", fontWeight: "600" }}
          >
            Live Updates
          </h4>
        </div>
      </div>

        <div
          className="container"
          style={{
              display: "grid",
            //   flexDirection: "row",
              padding: "1%",
                gridTemplateColumns: "repeat(3,1fr)",
            }}
            >
          {newsData.map((news) => {
            return (
              <NewsCard
                img={news.urlToImage}
                title={news.title}
                date={news.publishedAt}
                desc={news.description}
                news_url={news.url}
              />
            );
          })}
        </div>
    </div>
  );
};

export default NewsInfo;
