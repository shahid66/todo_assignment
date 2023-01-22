import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../state-slice/todoSlice";

export default configureStore({
    reducer:{
        todo:todoSlice,  
    }
})