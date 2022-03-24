import { createSlice } from "@reduxjs/toolkit";

const initialSateValue = {
    modal: true,
};

export const advisorySlice = createSlice({
    name: "advisory",
    initialState: {
        value: initialSateValue,
    },
    reducers: {
        closeAdvisory: (state, action) => {
            state.value = { modal: false };
        },
    },
});

export const { closeAdvisory } = advisorySlice.actions;

export default advisorySlice.reducer;
