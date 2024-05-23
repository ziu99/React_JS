import React, { Component } from "react";
// kết nối giỏ hàng redux(connect hàm kết nối reactComponent với redux store )
import { connect } from "react-redux";

class ModalGioHangRedux extends Component {
  renderGioHangRedux = () => {
    // this.props.gioHang la thuộc tính nhận từ redux
    return this.props.gioHang.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.maSP}</td>
          <td>{spGH.tenSP}</td>
          <td>
            <img src={spGH.hinhAnh} width={80} height={100} />
          </td>
          <td>
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(index, false);
              }}
            >
              -
            </button>{" "}
            {spGH.soLuong}{" "}
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(index, true);
              }}
            >
              +
            </button>
          </td>
          <td>{spGH.giaBan}</td>
          <td>{spGH.soLuong * spGH.giaBan}</td>
          <td>
            <button
              onClick={() => {
                this.props.xoaGioHang(index);
              }}
              className="btn btn-danger"
            >
              xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Số lượng</th>
              <th>Giá bán</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>{this.renderGioHangRedux()}</tbody>
          <tfoot>
            <td colSpan="5"></td>
              <td>Tổng tiền</td>
              <td>
                {this.props.gioHang.reduce((tongTien, sanPhamGH, index) => {
                  return (tongTien += sanPhamGH.soLuong * sanPhamGH.giaBan);
                }, 0)}
              </td>
            
          </tfoot>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // state là store tổng => truy xuất đến GioHangReducers => biến state trên GioHangReducers
  return {
    gioHang: state.GioHangReducers.gioHang, // tạo ra 1 prop giỏ hàng của ModalGioHangRedux
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (index) => {
      const action = {
        type: "XOA_GIO_HANG",
        index,
      };
      console.log(action);
      // đưa phương thức lên reducer
      dispatch(action);
    },
    tangGiamSoLuong: (index, tangGiam) => {
      const action = {
        type: "TANG_GIAM_SO_LUONG",
        index,
        tangGiam,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux);
