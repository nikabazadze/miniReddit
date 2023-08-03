import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSubredditPosts, getPostComments } from "../../API/redditAPI";
import { selectSearchTerm } from "../Search/SearchSlice";

// Fetches chosen subreddit's posts
export const loadPosts = createAsyncThunk(
    'feed/loadPosts',
    getSubredditPosts
);

// Fetches specific post's comments
export const loadPostComments = createAsyncThunk(
    'feed/loadPostComments',
    getPostComments
);

export const feedSlice = createSlice({
    name: "feed",
    initialState: {
        posts: [],
        postIsLoading: false,
        postHasError: false,
        commentIsLoading: false,
        commentHasError: false
    },
    reducers: {},
    extraReducers: {
        [loadPosts.pending]: (state, action) => {
            state.postIsLoading = true;
            state.postHasError = false;
        },
        [loadPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.postIsLoading = false;
            state.postHasError = false;
        },
        [loadPosts.rejected]: (state, action) => {
            state.postIsLoading = false;
            state.postHasError = true;
        },
        [loadPostComments.pending]: (state, action) => {
            state.commentIsLoading = true;
            state.commentHasError = false;
        },
        [loadPostComments.fulfilled]: (state, action) => {
            const index = action.payload[0];
            const comments = action.payload[1];
            state.posts[index].comments = comments;
            state.commentIsLoading = false;
            state.commentHasError = false;
        },
        [loadPostComments.rejected]: (state, action) => {
            state.commentIsLoading = false;
            state.commentHasError = true;
        }
    }
});

export const selectPosts = (state) => state.feed.posts;
export const selectPostIsLoading = (state) => state.feed.postIsLoading;
export const selectPostHasError = (state) => state.feed.postHasError;
export const selectCommentIsLoading = (state) => state.feed.commentIsLoading;
export const selectCommentHasError = (state) => state.feed.commentHasError;

/**
 * It filters posts by filtering post's titles with searchterm. Those posts
 * are from "/all" subreddit which is mix of other subreddit's posts
 * @param {Object} state 
 * @returns Filtered posts
 */
export const selectFilteredPosts = (state) => {
    const searchTerm = selectSearchTerm(state);
    const posts = selectPosts(state);
    if (searchTerm) {
        return posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    return posts;
};

export default feedSlice.reducer;