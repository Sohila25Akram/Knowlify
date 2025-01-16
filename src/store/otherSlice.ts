import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BurgerMenuState {
  isOpen: boolean;
}

const initialState: BurgerMenuState = {
  isOpen: false,
};

const otherSlice = createSlice({
  name: "burgerMenu",
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpen } = otherSlice.actions;
export default otherSlice.reducer;
