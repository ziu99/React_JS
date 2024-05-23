import React, { Component } from 'react'

export default class SanPhamChiTiet extends Component {
  render() {
    let {phone,xemChiTiet}=this.props
    return (
      <div className='col-4'>
        <div className="card " >
          <img className="card-img-top" src={phone.hinhAnh} alt  />
          <div className="card-body">
            <h4 className="card-title">{phone.tenSP}</h4>
            <p className="card-text">{phone.giaBan}</p>
            <button
              className="btn btn-success"
              onClick={() => xemChiTiet(phone)}
            >
              Xem Chi Tiết
            </button>
          </div>
        </div>
      </div>
    )
  }
}
