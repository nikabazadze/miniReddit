import { createSlice } from "@reduxjs/toolkit";

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
});

export const { setChosenSubreddit, clearChosenSubreddit } = subredditsSlice.actions;

export const selectSubreddits = (state) => state.subreddits.subreddits;
export const selectChosenSubreddit = (state) => state.subreddits.chosenSubreddit;

export default subredditsSlice.reducer;