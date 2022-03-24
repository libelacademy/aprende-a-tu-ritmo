import { createSlice } from "@reduxjs/toolkit";


const initialSateValue = {
    menu: false,
};


export const sideMenuSlice = createSlice({
    name: "sideMenu",
    initialState: {
        value: initialSateValue,
    },
    reducers: {
        showSideMenu: (state, action) => {
            state.value = { menu: true }
        },

        closeSideMenu: (state, action) => {
            state.value = { menu: false}
        }
    }
});

export const { showSideMenu, closeSideMenu } = sideMenuSlice.actions;

export default sideMenuSlice.reducer;