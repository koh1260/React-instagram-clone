import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        email: "",
        password: ""
    },
    reducers:{
        login: (state, action) => {
            console.log('login action: ', action);
            state.email = action.payload.email;
            state.password = action.payload.password;
            console.log('login state: ', state);
        }
    }
});
export default loginSlice;