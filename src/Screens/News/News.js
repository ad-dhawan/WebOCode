// import React, { useEffect, useState } from "react";
// import NewsCard from "../../Components/NewsCard/News";
// import axios from "axios";
// import { Container, Card, Row, Col } from "react-bootstrap";
// import "./News.css";
// import Slider from "react-slick";


// const News = () => {
//   const [newsData, setNewsData] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         "http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=f56265da815940c781ee2ac47e3f1109"
//       )
//       .then((res) => {
//         setNewsData(res.data.articles);
//         // console.log(res.data);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   var Scroll_set = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//   };
//   return (
//     <div class="main" id="news">
//       <Container>
       
//       </Container>

//         <Slider {...Scroll_set}>
//           {newsData.map((news) => {
//             return (
//               <NewsCard
//                 img={news.urlToImage}
//                 title={news.title}
//                 date={news.publishedAt}
//                 desc={news.description}
//               />
//             );
//           })}
//         </Slider>
//     </div>
//   );
// };

// export default News;
