import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSubreddits } from "../../API/redditAPI";

export const loadSubreddits = createAsyncThunk(
    "subreddits/addSubreddits",
    getSubreddits
);

export const subredditsSlice = createSlice({
    name: "subreddits",
    initialState: {
        subreddits: [],
        chosenSubreddit: "",
        isLoading: false,
        hasError: false
    },
    reducers: {
        setChosenSubreddit: (state, action) => {state.chosenSubreddit = action.payload},
        clearChosenSubreddit: (state) => {state.chosenSubreddit = ""},
    },
    extraReducers: {
        [loadSubreddits.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadSubreddits.fulfilled]: (state, action) => {
            state.subreddits = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadSubreddits.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const { setChosenSubreddit, clearChosenSubreddit } = subredditsSlice.actions;

export const selectSubreddits = (state) => state.subreddits.subreddits;
export const selectChosenSubreddit = (state) => state.subreddits.chosenSubreddit;

export default subredditsSlice.reducer;