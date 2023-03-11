import { createSlice } from "@reduxjs/toolkit";
import AuthService from '../../api/auth';

const userSlice = createSlice({
    name: 'user',
    initialState:{
        user: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state, action) => {
            state.user = null;
            state.isLogined = false;
        }
    },
});
export default userSlice;