import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { Booking } from 'types/Booking';
import { RootState } from 'store/store';

const initialState = { value: {} };

interface State {
  value: Record<string, Record<number, Booking>>;
}
type Action<T> = PayloadAction<T>;
// prettier-ignore
type Reducers = { reserveTable: (state: State, action: Action<Booking & { userId: string }>) => void }
  & { cancelTable: (state: State, action: Action<{ userId: string; reservationId: number }>) => void; }
  & { setReservations: (state: State, action: Action<State['value']>) => void };

const reservationsSlice = createSlice<State, Reducers, 'reserve'>({
  name: 'reserve',
  initialState,
  reducers: {
    reserveTable: (state, { payload }) => {
      if (state.value?.[payload.userId]) {
        state.value[payload.userId][payload.id] = payload;
      } else {
        state.value[payload.userId] = { [payload.id]: payload };
      }

      localStorage.setItem('reservations', JSON.stringify(current(state).value));
    },
    cancelTable: (state, { payload }) => {
      if (state.value[payload.userId]) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete state.value[payload.userId][payload.reservationId];
        localStorage.setItem('reservations', JSON.stringify(current(state.value)));
      }
    },
    setReservations: (state, { payload }: Action<State['value']>) => {
      state.value = payload;
    },
  },
});

export const selectReservations =
  (userId?: string) =>
  (state: RootState): Record<number, Booking> | undefined => {
    if (userId) {
      console.log('state', state.booking);
      return state.booking.value[userId];
    }
  };

export const { reserveTable, cancelTable, setReservations } = reservationsSlice.actions;

export default reservationsSlice.reducer;
