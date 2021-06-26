import React from "react";
import "./Stats.css";

import Graph from '../../Components/Graph/Graph'
import IndiaStats from '../../Components/IndiaStats/IndiaStats'
import SearchStats from '../../Components/SearchStats/SearchStats'

const Stats = () => {
  return (
    <div class="main" id="stats">
        <IndiaStats />
      <div class="stats-container">
      <Graph />
        <SearchStats />
      </div>
    </div>
  );
};

export default Stats;
