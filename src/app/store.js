import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import userSlice from "../features/user/userSlice";

// const { createLogger } = require("redux-logger");
// const logger = createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecreame: icecreamReducer,
    user: userSlice,
  },
  //   middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
});

export default store;
