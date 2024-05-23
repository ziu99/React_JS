import React, { Component } from "react";

export default class ModalGioHang extends Component {
  render() {
    const { gioHang, xoaGioHang, tangGiamSoLuong } = this.props;
    return (
      <div className="container">
        <div>
          {/* Modal */}
          <div
            className="modal fade mr-24"
            id="modelId"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div
                className="modal-content  "
                style={{ width: 800, margin: "0 -160px" }}
              >
                <div className="modal-header">
                  <h5 className="modal-title">Giỏ Hàng</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <td>Mã</td>
                        <td>Hình Ảnh</td>
                        <td>Tên Sản Phẩm</td>
                        <td>Số Lượng</td>
                        <td>Đơn Giá</td>
                        <td>Thành Tiền</td>
                      </tr>
                    </thead>
                    <tbody>
                      {gioHang.map((spGh, index) => {
                        return (
                          <tr key={index}>
                            <td>{spGh.maSP}</td>
                            <td>
                              <img
                                src={spGh.hinhAnh}
                                alt=""
                                width={50}
                                height={50}
                              />
                            </td>
                            <td>{spGh.tenSP}</td>
                            <td>
                              <button
                                className="btn btn-primary"
                                onClick={() => tangGiamSoLuong(spGh.maSP, true)}
                              >
                                +
                              </button>
                              {spGh.soLuong}
                              <button
                                className="btn btn-primary"
                                onClick={() =>
                                  tangGiamSoLuong(spGh.maSP, false)
                                }
                              >
                                -
                              </button>
                            </td>
                            <td>{spGh.giaBan.toLocaleString()}</td>
                            <td>{(spGh.soLuong * spGh.giaBan).toLocaleString()}</td>
                            <td>
                              <button
                                onClick={() => xoaGioHang(spGh.maSP)}
                                className="btn btn-danger"
                              >
                                Xoá
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={5}></td>
                        <td>Tổng Tiền : </td>
                        <td>
                          {" "}
                          {this.props.gioHang.reduce(
                            (tongTien, spGh, index) => {
                              return (tongTien += spGh.soLuong * spGh.giaBan).toLocaleString();
                            },
                            0
                          )}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
