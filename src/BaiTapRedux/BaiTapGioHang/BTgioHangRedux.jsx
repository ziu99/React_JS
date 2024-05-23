import React, { Component } from 'react'
import ModalGioHangRedux from './ModalGioHangRedux'
import DanhSachSpRedux from './DanhSachSpRedux'

export default class BTgioHangRedux extends Component {
  render() {
    return (
      <div className='container'>
        <h3 className=' text-center mt-5'>BÀI TẬP GIỎ HÀNG REDUX</h3>
            <ModalGioHangRedux/>
            <DanhSachSpRedux/>
      </div>
    )
  }
}
