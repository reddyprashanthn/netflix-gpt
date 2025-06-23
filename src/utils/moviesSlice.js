import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies : null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies:null,
        upComingMovies:null,
        movieDetails: {},
    },
    reducers :{
        addNowPlayingMovies:(state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state, action) =>{
            state.popularMovies = action.payload;
        },
        addTrailerVideo:(state, action) => {
            state.trailerVideo = action.payload;
        },
        addTopRatedMovies: (state,action)=> {
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies:(state,action)=> {
            state.upComingMovies = action.payload;
        },
        addMovieDetails:(state,action)=> {
            state.movieDetails = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addUpComingMovies, addPopularMovies, addTrailerVideo, addTopRatedMovies, addMovieDetails} = moviesSlice.actions
export default moviesSlice.reducer