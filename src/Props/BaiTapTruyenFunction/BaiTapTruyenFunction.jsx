import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";

export default class BaiTapTruyenFunction extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center text-success">Danh Sách Sản Phẩm</h3>
        <DanhSachSanPham />
      </div>
    );
  }
}
