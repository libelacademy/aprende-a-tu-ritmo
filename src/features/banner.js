import { createSlice } from "@reduxjs/toolkit";

const initialSateValue = {
    banner: true,
};

export const bannerSlice = createSlice({
    name: "banner",
    initialState: {
        value: initialSateValue,
    },
    reducers: {
        closeBanner: (state, action) => {
            state.value = { banner: false };
        },
    },
});

export const { closeBanner } = bannerSlice.actions;

export default bannerSlice.reducer;
