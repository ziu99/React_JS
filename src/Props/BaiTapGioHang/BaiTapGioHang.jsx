import React, { Component } from "react";
import ModalGioHang from "./ModalGioHang";
import DanhsachSanPhamGioHang from "./DanhsachSanPhamGioHang";
import phoneData from "../../data/phoneData.json";

export default class BaiTapGioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: [],
    };
  }

  //   Lấy dữ liệu tại component BaiTapGioHang
  themGioHang = (sanPhamChon) => {
    //  b1 từ sp đc chọn tạo ra sanPhamGioHang
    let spGioHang = {
      maSP: sanPhamChon.maSP,
      tenSP: sanPhamChon.tenSP,
      giaBan: sanPhamChon.giaBan,
      hinhAnh: sanPhamChon.hinhAnh,
      soLuong: 1,
    };
    //    b2 kiểm tra sp đc chọn có trong giỏ hàng hay chưa?
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spGioHang.maSP);
    if (index !== -1) {
      // sảm phẩm đc click đã có trong this.state.gioHang
      gioHangCapNhat[index].soLuong += 1;
    } else {
      // sản phẩm đc click chưa có trong this.state.gioHang
      gioHangCapNhat.push(spGioHang);
    }
    // setState để component render lại
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  // Đặt sự kiện xoá giỏ hàng tại BaiTapGioHang
  xoaGioHang = (maSP) => {
    // tìm trong giỏ hàng có sản phẩm chưa maSP đc chọn

    // cách 1:
    // var gioHangCapNhat =[...this.state.gioHang]
    // let index=gioHangCapNhat.findIndex(sp=>sp.maSP===maSP)
    // if (index!==-1){
    //   gioHangCapNhat.slice(index,1)
    // }

    // cách 2:
    var gioHangCapNhat = this.state.gioHang.filter((sp) => sp.maSP !== maSP);

    // cập nhật lại state giỏ hàng và render lại giao diện
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  // hàm tăng giảm số lượng
  tangGiamSoLuong = (maSP, tangGiam) => {
    // tăngGiam ===true => xử lý tăng , false :xử lý giảm
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    if (tangGiam) {
      gioHangCapNhat[index].soLuong += 1;
    } else 
    {
      if (gioHangCapNhat[index].soLuong > 1)
      {
        gioHangCapNhat[index].soLuong -= 1;
      }
    }
    console.log(tangGiam);
    // cập nhật lại giá trị render lại giỏ hàng
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, spGh, index) => {
      return (tsl += spGh.soLuong);
    }, 0);
    return (
      <div className="container">
        <h2 className="text-center text-success mt-3 ">Bài Tập Giỏ Hàng</h2>
        <ModalGioHang
          xoaGioHang={this.xoaGioHang}
          gioHang={this.state.gioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />
        <div className=" mb-3 mr-3 text-right">
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelId"
          >
            {" "}
            Giỏ Hàng ( {tongSoLuong} )
          </button>{" "}
        </div>
        <DanhsachSanPhamGioHang
          themGioHang={this.themGioHang}
          mangSanPham={phoneData}
        />
      </div>
    );
  }
}
