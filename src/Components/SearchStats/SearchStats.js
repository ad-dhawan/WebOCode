import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";
import Slide from "react-reveal/Slide";

export default class SearchStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [],
      confirmed: "",
      state: "",
      deaths: "",
      deltaConfirmed: "",
      deltaDeaths: "",
      recovered: "",
      deltaRecovered: "",
      active: "",
    };
  }

  async getOptions() {
    const res = await axios.get("https://api.covid19india.org/data.json");
    const data = res.data.statewise;

    console.log(data);

    const options = data.map((d) => ({
      value: d.confirmed,
      label: d.state,
      deaths: d.deaths,
      deltaConfirmed: d.deltaconfirmed,
      deltaDeaths: d.deltadeaths,
      recovered: d.recovered,
      deltaRecovered: d.deltarecovered,
      active: d.active,
    }));

    this.setState({ selectOptions: options });
  }

  handleChange(e) {
    this.setState({
      confirmed: e.value,
      state: e.label,
      deaths: e.deaths,
      deltaConfirmed: e.deltaConfirmed,
      deltaDeaths: e.deltaDeaths,
      recovered: e.recovered,
      deltaRecovered: e.deltaRecovered,
      active: e.active,
    });
  }

  componentDidMount() {
    this.getOptions();
  }

  render() {
    const customBaseStyles = (base) => ({
      ...base,
      height: 40,
      minHeight: 22,
      fontSize: 20,
      zIndex: 100,
    });

    const customMenuStyles = (base) => ({
      ...base,
      height: 40,
      minHeight: 22,
      fontSize: 20,
    });

    return (
      <div
        style={{
          borderRadius: 10,
          padding: 20,
          width: "40%",
          boxShadow: "5px 5px 10px gray",
        }}
      >
        <Slide bottom>
          <Select
            maxMenuHeight={200}
            isSearchable={true}
            placeholder={"Search State"}
            styles={{ control: customBaseStyles, menu: customMenuStyles }}
            options={this.state.selectOptions}
            onChange={this.handleChange.bind(this)}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: "5px",
              marginLeft: "5px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <p style={{ fontSize: 16, textAlign: "center" }}>
              Cases: {this.state.confirmed}
              <p style={{ fontSize: 14, marginTop: "10px" }}>
                ↑ {this.state.deltaConfirmed}
              </p>
            </p>
            <p style={{ fontSize: 16, textAlign: "center" }}>
              Deaths: {this.state.deaths}
              <p style={{ fontSize: 14, marginTop: "10px" }}>
                ↑ {this.state.deltaDeaths}
              </p>
            </p>
            <p style={{ fontSize: 16, textAlign: "center" }}>
              Recovered: {this.state.recovered}
              <p style={{ fontSize: 14, marginTop: "10px" }}>
                ↑ {this.state.deltaRecovered}
              </p>
            </p>
            <p style={{ fontSize: 16, textAlign: "center" }}>
              Active: {this.state.active}
            </p>
          </div>
        </Slide>
      </div>
    );
  }
}
