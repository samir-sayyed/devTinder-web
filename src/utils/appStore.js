import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";  
import feedReducer from "./feedSlice.js";
import requestsReducer from "./requestsSlice.js";

export const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        requests: requestsReducer
    }, 
})

