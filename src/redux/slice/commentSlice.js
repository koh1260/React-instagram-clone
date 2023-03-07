import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        comments: [],
        newComment: '',
        openCommentModal: false
    },
    reducers: {
        setComments: (state, action) => {
            state.comments = [...action.payload.comments];
        },
        writingComment: (state, action) => {
            state.newComment = action.payload.newComment;
        },
        controlCommentModal: (state, action) => {
            state.openCommentModal ? (state.openCommentModal = false) : (state.openCommentModal = true);
        }
    }
})
export default commentSlice;