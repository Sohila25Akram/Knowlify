import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GuestState {
  courseCategory: string;
}

const initialState: GuestState = {
  courseCategory: "الدورات التعليمية الاعلى مبيعًا",
};

const guestSlice = createSlice({
  name: "courseCategory",
  initialState,
  reducers: {
    setCourseCategory: (state, action: PayloadAction<string>) => {
      state.courseCategory = action.payload;
    },
  },
});

export const { setCourseCategory } = guestSlice.actions;
export default guestSlice.reducer;
