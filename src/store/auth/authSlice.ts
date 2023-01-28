import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import { UserAuth } from 'types/UserAuth';

interface AuthState {
  user: UserAuth | null;
}

const userAuth = localStorage.getItem('userAuth');

const initialUserState = { id: null, email: null, password: null };
const initialState = () => (userAuth && JSON.parse(userAuth)?.id ? JSON.parse(userAuth) : { user: initialUserState });

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState(),
  reducers: {
    authLogin: (state: AuthState, { payload }: PayloadAction<UserAuth | null>) => {
      if (payload?.id) {
        localStorage.setItem('user', JSON.stringify(payload));
        state.user = payload;
      } else {
        state.user = initialUserState;
      }
    },
    authLogout: state => {
      localStorage.removeItem('user');
      state.user = initialUserState;
    },
  },
});

export const selectAuth = (state: RootState) => {
  return state.auth;
};

export const selectUserEmail = (state: RootState): string | undefined => {
  return state.auth.user?.email;
};

export const { authLogin, authLogout } = authSlice.actions;

export default authSlice.reducer;
