import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

const initialState: Record<'value', any> = {
  value: {},
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state, { payload }: PayloadAction<string>) => {
      if (!state.value[payload]) {
        state.value[payload] = 1;
      } else {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        state.value[payload] += 1;
      }
    },
    removeOrder: (state, { payload }: PayloadAction<string>) => {
      state.value[payload] -= 1;
    },
  },
});

export const selectOrder = (state: RootState) => state.order.value;

export const { addOrder, removeOrder } = orderSlice.actions;
export default orderSlice.reducer;
