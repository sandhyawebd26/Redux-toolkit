import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    c: localStorage.getItem("c") ? parseInt(localStorage.getItem("c")) : 0,
};

export const customReducer = createReducer(initialState, {
    increment: (state) => {
        state.c += 1;
        localStorage.setItem("c", state.c)

    },

    incrementByValue: (state, action) => {
        state.c += action.payload;
        localStorage.setItem("c", state.c)

    },

    decrement: (state) => {
        state.c -= 1;
        localStorage.setItem("c", state.c)

    },
});
