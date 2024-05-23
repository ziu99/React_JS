import React, { Component } from "react";
import data from "../data/DataFilms.json";
import PhimRFC from "./PhimRFC";
import PhimRCC from "./PhimRCC";

export default class Demoprops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangPhim: data,
    };
  }

  renderPhim = () => {
    return this.state.mangPhim.map((phim, index) => {
      return (
        <div className="col-3" key={index}>
          {/* <PhimRFC phimInput={phim} /> */}
          <PhimRCC phimInput={phim}/>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderPhim()}</div>
      </div>
    );
  }
}
