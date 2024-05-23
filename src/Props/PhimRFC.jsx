import React from "react";

export default function PhimRFC(props) {
  let phim = props.phimInput;
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
