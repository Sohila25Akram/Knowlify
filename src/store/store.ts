import { configureStore } from "@reduxjs/toolkit";
import guestReducer from "./guestSlice";
import courseCategoryReducer from "./courseCategorySlice";
import burgerMenuReducer from "./otherSlice";

export const store = configureStore({
  reducer: {
    guest: guestReducer,
    courseCategory: courseCategoryReducer,
    burgerMenu: burgerMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
