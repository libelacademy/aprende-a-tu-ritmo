import { createSlice } from "@reduxjs/toolkit";

const initialSateValue = {
    modal: false,
    item: "",
    more: "",
};

export const trainingSlice = createSlice({
    name: "training",
    initialState: {
        value: initialSateValue,
    },
    reducers: {
        openTrainingMore: (state, action) => {
            state.value = action.payload;
        },
        closeTrainingMore: (state, action) => {
            state.value = initialSateValue;
        },
    },
});

export const { openTrainingMore, closeTrainingMore } = trainingSlice.actions;

export default trainingSlice.reducer;
