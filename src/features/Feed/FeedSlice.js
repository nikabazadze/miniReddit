import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSubredditPosts } from "../../API/redditAPI";
import { selectSearchTerm } from "../Search/SearchSlice";

export const loadPosts = createAsyncThunk(
    'feed/loadPosts',
    getSubredditPosts
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

export const selectFilteredPosts = (state) => {
    const searchTerm = selectSearchTerm(state);
    const posts = selectPosts(state);
    if (searchTerm) {
        return posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    return posts;
};

export default feedSlice.reducer;