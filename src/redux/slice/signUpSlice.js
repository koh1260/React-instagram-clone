import { createSlice } from "@reduxjs/toolkit";

const signUpSlice = createSlice({
    name: 'signUp',
    initialState: {
        email: "",
        name: "",
        nickname: "",
        password: ""
    },
    reducers: {
        inputEmail: (state, action) => {
            state.email = action.payload.email;
        },
        inputName: (state, action) => {
            state.name = action.payload.name;
        },
        inputNickname: (state, action) => {
            state.nickname = action.payload.nickname;
        },
        inputpassword: (state, action) => {
            state.password = action.payload.password;
        },
        clear: (state, action) => {
            state.email = "";
            state.name = "";
            state.nickname = "";
            state.password = "";
        }
    }
})
export default signUpSlice;