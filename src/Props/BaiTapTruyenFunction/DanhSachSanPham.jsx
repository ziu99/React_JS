import React, { Component } from "react";
import phoneData from "../../data/phoneData.json";
import SanPhamChiTiet from "./SanPhamChiTiet";

export default class DanhSachSanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sanPhamChiTiet: phoneData[0],
    };
  }

  renderPhone = () => {
    // lấy props mảng sp từ component ngoài vào
    return phoneData.map((phone, index) => {
      return (
        <SanPhamChiTiet key={index} phone={phone} xemChiTiet={this.xemChiTiet}/>
      );
    });
  };
  //   Xử lý nút xem chi tiết
  xemChiTiet = (sanPham) => {
    console.log(sanPham);
    // thay đổi giá trị phone xemChiTiet
    this.setState ({
        sanPhamChiTiet: sanPham,
    });
  };

  render() {
    let { sanPhamChiTiet } = this.state;
    return (
      <div className="container">
        <div className="row">{this.renderPhone()}</div>
        <div className="row">
          <div className="col-6">
            <h3 className=" text-center">{sanPhamChiTiet.tenSP}</h3>
            <img src={sanPhamChiTiet.hinhAnh} alt="" width={300} height={300} />
          </div>
          <div className="col-6">
            <h3 className=" text-center">Thông Số Kĩ Thuật</h3>
            <table className="table">
              <tr>
                <th>Màn Hình :</th>
                <th>{sanPhamChiTiet.manHinh}</th>
              </tr>
              <tr>
                <th>Hệ điều hành :</th>
                <th>{sanPhamChiTiet.heDieuHanh}</th>
              </tr>
              <tr>
                <th>Camera trước :</th>
                <th>{sanPhamChiTiet.cameraTruoc}</th>
              </tr>
              <tr>
                <th>Camear sau :</th>
                <th>{sanPhamChiTiet.cameraSau}</th>
              </tr>
              <tr>
                <th>RAM :</th>
                <th>{sanPhamChiTiet.ram}</th>
              </tr>
              <tr>
                <th>ROM :</th>
                <th>{sanPhamChiTiet.rom}</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
