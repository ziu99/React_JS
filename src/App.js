import "./App.css";
import BaiTapVongLap from "./BaiTapVongLap/BaiTapVongLap";
import Demoprops from "./Props/Demoprops";
import BaiTapComponent from "./BaiTap/BaiTapComponent";
import BaiTapTruyenFunction from "./Props/BaiTapTruyenFunction/BaiTapTruyenFunction";
import BaiTapGioHang from "./Props/BaiTapGioHang/BaiTapGioHang";
import BTgioHangRedux from "./BaiTapRedux/BaiTapGioHang/BTgioHangRedux";


function App() {
  return (
    <div className="App">
      {/* <BaiTapComponent/> */}
      {/* <BaiTapVongLap/> */}
      {/* <Demoprops /> */}
      {/* <BaiTapTruyenFunction/> */}
      {/* <BaiTapGioHang/> */}
      <BTgioHangRedux/>
    </div>
  );
}

export default App;
