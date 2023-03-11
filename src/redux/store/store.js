import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../slice/loginSlice";
import signUpSlice from "../slice/signUpSlice";
import postSlice from "../slice/postSlice";
import userSlice from "../slice/userSlice";

const store = configureStore({
    reducer:{
        login: loginSlice.reducer,
        signUp: signUpSlice.reducer,
        post: postSlice.reducer,
        user: userSlice.reducer,
    }
})
export default store;