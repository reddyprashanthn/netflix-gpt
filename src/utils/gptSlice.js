import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState: {
        showGptSearch: false,
    },
    reducers:{
        toogleGptSearcvhView:(state) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }
})


export const  { toogleGptSearcvhView } = gptSlice.actions;
export default gptSlice.reducer;