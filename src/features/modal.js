import { createSlice } from "@reduxjs/toolkit";


const initialSateValue = {
    close: true,
};


export const sideModalSlice = createSlice({
    name: "sideMenu",
    initialState: {
        value: initialSateValue,
    },
    reducers: {
        showModal: (state, action) => {
            state.value = { close: false }
        },

        closeModal: (state, action) => {
            state.value = { close: true}
        }
    }
}); 

export const { showModal, closeModal } = sideModalSlice.actions;

export default sideModalSlice.reducer;