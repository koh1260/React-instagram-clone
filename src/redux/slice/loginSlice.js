import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        email: "",
        password: ""
    },
    reducers:{
        inputEmail: (state, action) => {
            state.email = action.payload.email;
        },
        inputPassword: (state, action) => {
            state.password = action.payload.password;
        }
    }
});
export default loginSlice;