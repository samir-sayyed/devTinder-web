import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: "feed",
    initialState: {
        feed: null
    },
    reducers: {
        addFeed: (state, action) => {
            state.feed = action.payload;
        },
        removeFeed: (state, action) => {
            const index = state.feed.findIndex((post) => post._id === action.payload);
            state.feed.splice(index, 1);
            state.feed = [...state.feed];
        }
    }
})

export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;