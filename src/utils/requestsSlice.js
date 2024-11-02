import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
    name: "requests",
    initialState: {
        requests: null
    },
    reducers: {
        addRequests: (state, action) => {
            state.requests = action.payload;
        },
        removeRequest: (state, action) => {
            const index = state.requests.findIndex((request) => request._id === action.payload);
            state.requests.splice(index, 1);
        }
    }
})

export const { addRequests, removeRequest } = requestsSlice.actions;
export default requestsSlice.reducer;