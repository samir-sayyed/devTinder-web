import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        addUser: (state, action) => {
            console.log(action.payload);
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = null;
        }
    }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer; 