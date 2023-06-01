import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../../db/postsDb"; // temporary for DEV

export const loadPosts = createAsyncThunk(
    'feed/loadPosts',
    getPosts
);

export const feedSlice = createSlice({
    name: "feed",
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [loadPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const selectPosts = (state) => state.feed.posts;


export default feedSlice.reducer;