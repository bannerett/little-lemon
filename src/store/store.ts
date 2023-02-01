import { combineReducers, configureStore } from '@reduxjs/toolkit';
import auth from 'store/auth/authSlice';
import booking from 'store/reservations/reservationsSlice';
import menu from 'store/menu/menuSlice';
import order from 'store/order/orderSlice';

const rootReducer = combineReducers({ auth, booking, menu, order });

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
