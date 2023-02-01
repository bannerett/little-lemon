import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import { selectMenuById } from 'store/menu/menuSlice';

interface OrderState {
  value: Record<string, number>;
  isOrder: boolean;
}

const order = localStorage.getItem('order');

const initialState = (): OrderState => (order ? JSON.parse(order) : { value: {}, isOrder: false });

const orderSlice = createSlice({
  name: 'order',
  initialState: initialState(),
  reducers: {
    addOrder: (state, { payload }: PayloadAction<string>) => {
      if (!state.value[payload]) {
        state.value[payload] = 1;
      } else {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        state.value[payload] += 1;
      }
      console.log(current(state));
      localStorage.setItem('order', JSON.stringify(current(state)));
    },
    removeOrder: (state, { payload }: PayloadAction<string>) => {
      state.value[payload] -= 1;

      if (!current(state.value)[payload]) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete state.value[payload];
      }
      localStorage.setItem('order', JSON.stringify(current(state)));
    },
    deleteOrder: (state, { payload }: PayloadAction<string>) => {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete state.value[payload];
      localStorage.setItem('order', JSON.stringify(current(state)));
    },
    placeOrder: (state, { payload }: PayloadAction<boolean>) => {
      state.isOrder = payload;
    },
    resetOrder: state => {
      state.isOrder = false;
      state.value = {};
      localStorage.setItem('order', JSON.stringify(current(state)));
    },
  },
});

export const selectOrder = (state: RootState): Record<string, number> => {
  console.log(state.order);
  return state.order.value;
};
export const selectOrderLength = (state: RootState): number => Object.keys(selectOrder(state)).length;
export const selectOrderCount = (state: RootState): number =>
  Object.values(selectOrder(state)).reduce((a, b) => a + b, 0);
export const selectOrderPrice = (state: RootState): number =>
  Object.entries(state.order.value).reduce((acc, [key, value]) => {
    return acc + selectMenuById(state)[key].price * value;
  }, 0);
export const selectOrderStatus = (state: RootState): boolean => state.order.isOrder;

export const { addOrder, removeOrder, deleteOrder, placeOrder, resetOrder } = orderSlice.actions;
export default orderSlice.reducer;
