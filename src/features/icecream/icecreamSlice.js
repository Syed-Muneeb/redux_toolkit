import { createSlice } from "@reduxjs/toolkit";
import { ordered } from "../cake/cakeSlice";

const initialState = {
  numberOfIcecreams: 10,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    orderIcecream: (state) => {
      state.numberOfIcecreams--;
    },
    restockedIcecream: (state, action) => {
      state.numberOfIcecreams += action.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numberOfIcecreams--;
  //     },
  //   },

  extraReducers: (builder) => {
    builder.addCase(ordered, (state) => {
      state.numberOfIcecreams--;
    });
  },
});

export default icecreamSlice.reducer;
export const { orderIcecream, restockedIcecream } = icecreamSlice.actions;
