import React, { Component } from "react";
import data from "../data/DataFilms.json";

export default class BaiTapVongLap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangPhim: data,
    };
  }

  renderMangPhim = () => {
    return this.state.mangPhim.map((phim, index) => {
      return (
        <div className="card col-3" key={index}>
          <img
            className="card-img-top"
            src={phim.hinhAnh}
            alt
            style={{ width: "200px", height: "300px" }}
          />
          <div className="card-body">
            <h4 className="card-title">{phim.tenPhim}</h4>
            <p className="card-text">
              {phim.moTa.length > 100
                ? phim.moTa.substring(0, 100) + "..."
                : phim.moTa}
            </p>
          </div>
        </div>
      );
    });
  };

  render() {
    console.log(this.state.mangPhim);
    return (
      <div className="container">
        <div className="row">{this.renderMangPhim()}</div>
      </div>
    );
  }
}
