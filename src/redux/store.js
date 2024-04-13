import { configureStore } from "@reduxjs/toolkit";
import newCharacterReducer from "./slices/newCharacterSlice";

export const store = configureStore({
  reducer: {
    cart: newCharacterReducer,
  },
});
