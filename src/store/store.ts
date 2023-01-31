import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import auth from 'store/auth/authSlice';
import booking from 'store/reservations/reservationsSlice';
import menu from 'store/menu/menuSlice';
import order from 'store/order/orderSlice';

const store = configureStore({
  reducer: combineReducers({ auth, booking, menu, order }),
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
