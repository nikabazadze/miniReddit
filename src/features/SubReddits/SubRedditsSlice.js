import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSubreddits } from "../../API/redditAPI";

export const loadSubreddits = createAsyncThunk(
    "subreddits/addSubreddits",
    getSubreddits
);

export const subredditsSlice = createSlice({
    name: "subreddits",
    initialState: {
        subreddits: [
            {
                id: 1,
                url: "/r/popular/",
                display_name: "Popular",
                display_name_prefixed: "Popular"
            },
            {
                id: 2,
                url: "/r/all/",
                display_name: "All",
                display_name_prefixed: "All"
            },
        ],
        chosenSubreddit: ["/r/popular/", "feeds"],
        visitedSubreddits: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
        setChosenSubreddit: (state, action) => {state.chosenSubreddit = action.payload},
        clearChosenSubreddit: (state) => {state.chosenSubreddit = ""},
        addVisitedSubreddit: (state, action) => {state.visitedSubreddits.unshift(action.payload)},
    },
    extraReducers: {
        [loadSubreddits.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadSubreddits.fulfilled]: (state, action) => {
            state.subreddits = state.subreddits.slice(0, 2);
            state.subreddits.push(...action.payload);
            state.isLoading = false;
            state.hasError = false;
        },
        [loadSubreddits.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const { setChosenSubreddit, clearChosenSubreddit, addVisitedSubreddit } = subredditsSlice.actions;

export const selectSubreddits = (state) => state.subreddits.subreddits;
export const selectChosenSubreddit = (state) => state.subreddits.chosenSubreddit;
export const selectVisitedSubreddits = (state) => state.subreddits.visitedSubreddits;
export const selectFeeds = (state) => state.subreddits.subreddits.filter((subreddit, index) => (index < 2 && subreddit));

export default subredditsSlice.reducer;