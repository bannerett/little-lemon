import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state, { payload }) => {
      console.log(payload);
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
