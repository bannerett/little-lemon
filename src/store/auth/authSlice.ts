import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

interface User {
  id: null | string;
  email: null | string;
  password: null | string;
}

interface AuthState {
  user: User | null;
}

const userAuth = localStorage.getItem('userAuth');

const initialUserState = { id: null, email: null, password: null };
const initialState = () => (userAuth && JSON.parse(userAuth)?.id ? JSON.parse(userAuth) : { user: initialUserState });

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState(),
  reducers: {
    setAuth: (state: AuthState, { payload }: PayloadAction<User | null>) => {
      if (payload?.id) {
        localStorage.setItem('user', JSON.stringify(payload));
        state.user = payload;
      } else {
        state.user = initialUserState;
      }
    },
    resetAuth: state => {
      localStorage.removeItem('user');
      state.user = initialUserState;
    },
  },
});

export const selectAuth = (state: RootState) => {
  return state.auth;
};

export const { setAuth, resetAuth } = authSlice.actions;

export default authSlice.reducer;
