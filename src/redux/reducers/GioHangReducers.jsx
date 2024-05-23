// khởi tạo giá trị giỏ hàng
const stateGioHang = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "iphone",
      hinhAnh: "./img/sp_iphoneX.png",
      soLuong: 1,
      giaBan: 1000,
      thanhTien: 1000,
    },
  ],
};

export const GioHangReducers = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      // xử lý  logic thêm giỏ hàng tại đây
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex(
        (spGH) => spGH.maSP === action.spGioHang.maSP
      );
      if (index !== -1) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        gioHangCapNhat.push(action.spGioHang);
      }
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }

    case "XOA_GIO_HANG": {
      let gioHangCapNhat = [...state.gioHang];
      // xoá giỏ hàng dựa vào index
      gioHangCapNhat.splice(action.index, 1);
    //   render lại giao diện
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }

    case "TANG_GIAM_SO_LUONG":{ 
        const {index,tangGiam}=action
        console.log(action);
        let gioHangCapNhat = [...state.gioHang];
        if(tangGiam){
            gioHangCapNhat[index].soLuong+=1
        }else{
            if(gioHangCapNhat[index].soLuong>=1){
            gioHangCapNhat[index].soLuong-=1
            }
        }
        state.gioHang = gioHangCapNhat;
        return { ...state };
    }
  }

  return { ...state };
};
