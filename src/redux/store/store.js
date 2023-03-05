import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../slice/loginSlice";
import signUpSlice from "../slice/signUpSlice";

const store = configureStore({
    reducer:{
        login: loginSlice.reducer,
        signUp: signUpSlice.reducer
    }
})
export default store;