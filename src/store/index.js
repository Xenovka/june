import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "./slices/display";

export default configureStore({
    reducer: {
        display: displayReducer
    }
});
