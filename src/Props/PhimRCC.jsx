import React, { Component } from "react";

export default class PhimRCC extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let phim = this.props.phimInput;
    return (
      <div>
        <div className="card">
          <img className="card-img-top" src={phim.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{phim.tenPhim}</h4>
            <p className="card-text">{phim.moTa}</p>
          </div>
        </div>
      </div>
    );
  }
}
