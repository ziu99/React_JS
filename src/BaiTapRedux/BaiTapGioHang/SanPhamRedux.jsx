import React, { Component } from "react";
// kết nối với reducerGioHang
import { connect } from "react-redux";
 class SanPhamRedux extends Component {
  render() {
    const { sanPham } = this.props;

    return (
      <div className="card text-white bg-primary">
        <img className="card-img-top" src={sanPham.hinhAnh} alt width={80} height={350} />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan}</p>
          <button onClick={ () => {this.props.themGioHang(sanPham)}} className="btn btn-success" >Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}


// xây dựng hàm tạo ra props là hàm xử lý sự kiện => đưa dữ liệu lên store 

const mapDispatchToProps  = (dispatch) => {
    return {
      // tạo ra props component (là function đưa dữ liệu lên store)
      themGioHang:   ( sanPham) => {
          const spGioHang={
            maSP:sanPham.maSP,
            tenSP:sanPham.tenSP,
            giaBan:sanPham.giaBan,
            soLuong:1,
            hinhAnh:sanPham.hinhAnh
          }
          // tạo action đưa dữ liệu len store
          const action = {           
            type :'THEM_GIO_HANG', // bắt buộc đặt tên type
            spGioHang:spGioHang    //  nội dung gửi lên reducer
          }
          console.log(action);
              // dùng hàm dispatch đưa dữ liệu len reducer
              dispatch(action);
      }

    }
}


export default connect(null,mapDispatchToProps)(SanPhamRedux)