import {combineReducers} from "redux"
import { GioHangReducers } from "./GioHangReducers"

// store tổng ứng dụng 
export const rootReducers =combineReducers ({
    // nơi sẽ chứa các nghiệp vụ reducer (store con)
    GioHangReducers:GioHangReducers

})