import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { Booking } from 'types/Booking';
import { RootState } from 'store/store';

const initialState = { registeredUserReservations: {}, unregisteredUserReservations: {} };

interface State {
  registeredUserReservations: Record<string, Record<number, Booking>>;
  unregisteredUserReservations: Record<string, Record<number, Booking>>;
}
type Action<T> = PayloadAction<T>;
// prettier-ignore
type Reducers = { reserveTable: (state: State, action: Action<Booking & { userId: string }>) => void }
  // eslint-disable-next-line
  & { cancelRegisteredUserReservation: (state: State, action: Action<{ userId: string; reservationId: number }>) => void; }
  // eslint-disable-next-line
  & { cancelUnregisteredUserReservation: (state: State, action: Action<{ userId: string; reservationId: number }>) => void; }
  & { setReservations: (state: State, action: Action<State['registeredUserReservations']>) => void }
  & { setUnregisteredUserReservations: (state: State, action: Action<State['unregisteredUserReservations']>) => void }
  & { reserveUnregisteredUserTable: (state: State, action: Action<Booking & { userId: string }>) => void };

const reservationsSlice = createSlice<State, Reducers, 'reserve'>({
  name: 'reserve',
  initialState,
  reducers: {
    reserveTable: (state, { payload }) => {
      if (state.registeredUserReservations?.[payload.userId]) {
        state.registeredUserReservations[payload.userId][payload.id] = payload;
      } else {
        state.registeredUserReservations[payload.userId] = { [payload.id]: payload };
      }

      localStorage.setItem('registeredUserReservations', JSON.stringify(current(state).registeredUserReservations));
    },
    cancelRegisteredUserReservation: (state, { payload }) => {
      if (state.registeredUserReservations[payload.userId]) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete state.registeredUserReservations[payload.userId][payload.reservationId];
        localStorage.setItem('registeredUserReservations', JSON.stringify(current(state.registeredUserReservations)));
      }
    },
    setReservations: (state, { payload }) => {
      state.registeredUserReservations = payload;
    },
    reserveUnregisteredUserTable: (state, { payload }) => {
      if (state.unregisteredUserReservations[payload.userId]) {
        state.unregisteredUserReservations[payload.userId][payload.id] = payload;
      } else {
        state.unregisteredUserReservations[payload.userId] = { [payload.id]: payload };
      }

      localStorage.setItem('unregisteredUserReservations', JSON.stringify(current(state).unregisteredUserReservations));
    },
    cancelUnregisteredUserReservation: (state, { payload }) => {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete state.unregisteredUserReservations[payload.userId][payload.reservationId];
      localStorage.setItem('unregisteredUserReservations', JSON.stringify(current(state).unregisteredUserReservations));
    },
    setUnregisteredUserReservations: (state, { payload }) => {
      state.unregisteredUserReservations = payload;
    },
  },
});

export const selectReservations =
  (userId?: string) =>
  (state: RootState): Booking[] => {
    return userId ? Object.values(state.booking.registeredUserReservations[userId] ?? {}) : [];
  };

export const selectUnregisteredUserReservations = (state: RootState): Booking[] =>
  Object.values(state.booking.unregisteredUserReservations).reduce<Booking[]>((prev, value) => {
    if (Object.keys(value).length > 0) {
      const booking = Object.values(value).reduce((acc, cur) => {
        return { ...acc, ...cur };
      }, {}) as Booking;

      return [...prev, booking];
    }

    return prev;
  }, []);

export const {
  reserveTable,
  cancelRegisteredUserReservation,
  setReservations,
  reserveUnregisteredUserTable,
  cancelUnregisteredUserReservation,
  setUnregisteredUserReservations,
} = reservationsSlice.actions;

export default reservationsSlice.reducer;
