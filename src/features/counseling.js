import { createSlice } from "@reduxjs/toolkit";

const initialSateValue = {
    modal: false,
};

export const counselingSlice = createSlice({
    name: "counseling",
    initialState: {
        value: initialSateValue,
    },
    reducers: {
        openCounseling: (state, action) => {
            state.value = {modal: true};
        },
        closeCounseling: (state, action) => {
            state.value = { modal: false };
        },
    },
});

export const { openCounseling, closeCounseling } = counselingSlice.actions;

export default counselingSlice.reducer;
