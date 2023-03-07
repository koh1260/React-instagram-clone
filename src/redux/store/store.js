import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../slice/loginSlice";
import signUpSlice from "../slice/signUpSlice";
import postSlice from "../slice/postSlice";
import commentSlice from "../slice/commentSlice";

const store = configureStore({
    reducer:{
        login: loginSlice.reducer,
        signUp: signUpSlice.reducer,
        post: postSlice.reducer,
        comment: commentSlice.reducer,
    }
})
export default store;