import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import loginSlice from "../slice/loginSlice";
import signUpSlice from "../slice/signUpSlice";
=======
import loginSlice from "../login/loginSlice";
>>>>>>> 933e8fa (Feat: 로그인 redux 적용)

const store = configureStore({
    reducer:{
        login: loginSlice.reducer,
<<<<<<< HEAD
        signUp: signUpSlice.reducer
=======
>>>>>>> 933e8fa (Feat: 로그인 redux 적용)
    }
})
export default store;