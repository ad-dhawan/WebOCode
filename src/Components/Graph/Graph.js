import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

import "./Graph.css";

const Graph = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let confirmedCases = [];
    let casesDate = [];
    let totalRecovered = [];
    axios
      .get("https://api.covid19india.org/data.json")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data.cases_time_series) {
          confirmedCases.push(parseInt(dataObj.totalconfirmed));
          casesDate.push(parseInt(dataObj.dateymd));
          totalRecovered.push(parseInt(dataObj.totalrecovered));
        }
        setChartData({
          labels: casesDate,
          datasets: [
            {
              label: "Confirmed Cases",
              data: confirmedCases,
              backgroundColor: ["#ff0000"],
              borderWidth: 1,
              pointRadius: 1
            },
            {
              label: "Total Recovered",
              data: totalRecovered,
              backgroundColor: ["#69799b"],
              borderWidth: 1,
              pointRadius: 1
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(confirmedCases, casesDate);
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <>
      <div>
      <Line
        data={chartData}
        className="line-chart"
        options={{
            scales: {
                xAxes: [{
                   gridLines: {
                      display: false
                   }
                }],
                yAxes: [{
                   gridLines: {
                      display: false
                   }
                }]
           },
            legend: {
                display: false,
                fontSize: 20
            }
          }}
      />
      </div>
    </>
  );
};

export default Graph;