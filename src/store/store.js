import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"

const store = configureStore({
    reducer: {
        auth : authSlice,
        // TODO: add PostSlice to store posts so that no need to make network requests again and again
    }
})

export default store