import { createSlice } from "@reduxjs/toolkit";


const initialSateValue = {
    modal: false,
    url: "https://www.youtube.com/watch?v=U4FAH7U-_OQ",
    type: "common",
    master: "",
    image: null
};

export const videoSlice = createSlice({
    name: "video",
    initialState: {
        value: initialSateValue,
    },
    reducers: {
        openVideo: (state, action) => {
            state.value = action.payload;
        },
        closeVideo: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { openVideo, closeVideo } = videoSlice.actions;

export default videoSlice.reducer;
