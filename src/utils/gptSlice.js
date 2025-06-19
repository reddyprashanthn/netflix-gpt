import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState: {
        showGptSearch: false,
        genMovies: null,
        gemMovieNames:null,
    },
    reducers:{
        toogleGptSearcvhView:(state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGenMovieResult:(state, action) => {
            const {movieNames, movieResults} = action.payload
            state.gemMovieNames = movieNames
            state.genMovies = movieResults
        }
    }
})


export const  { toogleGptSearcvhView, addGenMovieResult } = gptSlice.actions;
export default gptSlice.reducer;