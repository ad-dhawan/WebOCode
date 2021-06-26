import React, { Fragment, useEffect, useState } from "react";
import Card from "./Card";
import "./IndiaStats.css";

const GlobalCases = () => {
  const [data, setData] = useState();

  const getCovidData = async () => {
    try {
      const response = await fetch("https://covid19.mathdro.id/api");
      const data = await response.json();
      setData(data);
      // console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  if (!data) {
    return <h3>loading....</h3>;
  } else {
    return (
      <Fragment>
          <h1>Global Cases</h1>
        <div className="card-area ">
          <div className="container">
            <div className="row mt-5">
              <Card
                title="Infected"
                cases={data.confirmed.value}
                color="blue"
              />
              <Card
                title="Recovered"
                cases={data.recovered.value}
                color="green"
              />
              <Card title="Deaths" cases={data.deaths.value} color="red" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};

export default GlobalCases;
