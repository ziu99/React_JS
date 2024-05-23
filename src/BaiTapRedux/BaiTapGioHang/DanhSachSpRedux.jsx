import React, { Component } from 'react'
import data from "../../data/phoneData.json"
import SanPhamRedux from './SanPhamRedux'
export default class DanhSachSpRedux extends Component {

  // viết phương thức render sanPham
  renderSanPham   = () => {
      return data.map( (sanPham,index) =>{
        return <div className='col-4' key={index}>
          <SanPhamRedux  sanPham={sanPham}/>
        </div>
      } )
  }


  render() {
    return (
      <div className='container'>
        <h3 className='text-center text-success'>Danh Sách Sản Phẩm</h3>
        <div className='row'>
        {this.renderSanPham()}
        </div>
      </div>
    )
  }
}
