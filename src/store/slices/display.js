import { createSlice } from "@reduxjs/toolkit";

export const displaySlice = createSlice({
    name: "display",
    initialState: {
        isFirst: false,
        isSecond: false,
        isThird: false,
        isFourth: false,
        isFinal: false,
        isVerification: false
    },
    reducers: {
        updateDisplayState: (state, action) => {
            state[action.payload.stateName] = action.payload.value;
        }
    }
});

export const { updateDisplayState } = displaySlice.actions;

export default displaySlice.reducer;
