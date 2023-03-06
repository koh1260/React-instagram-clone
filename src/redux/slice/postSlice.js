import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    openPostingModal: false,
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = [...action.payload.posts];
    },
    controlPostingModal: (state, action) => {
        state.openPostingModal ? (state.openPostingModal = false) : (state.openPostingModal = true);
    },
  },
});
export default postSlice;
