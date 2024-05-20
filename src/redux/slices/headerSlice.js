import { createSlice } from '@reduxjs/toolkit';

const headerSlice = createSlice({
  name: 'header',
  initialState: {
    shrink: false,
  },
  reducers: {
    setHeaderShrink: (state, action) => {
      state.shrink = action.payload;
    },
  },
});

export default headerSlice;
