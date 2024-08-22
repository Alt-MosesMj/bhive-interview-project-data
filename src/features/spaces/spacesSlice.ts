// src/features/spaces/spacesSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  spaces: [],
};

const spacesSlice = createSlice({
  name: 'spaces',
  initialState,
  reducers: {
    setSpaces: (state, action) => {
      state.spaces = action.payload;
    },
  },
});

export const { setSpaces } = spacesSlice.actions;
export default spacesSlice.reducer;
