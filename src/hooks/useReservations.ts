import { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/store.hooks';
import { selectAuth } from 'store/auth/authSlice';
import {
  cancelRegisteredUserReservation,
  cancelUnregisteredUserReservation,
} from 'store/reservations/reservationsSlice';

export const useReservations = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectAuth);

  const [cancel, setCancel] = useState(false);
  const [cancelReservationId, setCancelReservationId] = useState<null | number>(null);
  const [unregisteredUserId, setUnregisteredUserId] = useState<undefined | string>(undefined);

  const handleCloseCancelModal = useCallback(() => {
    setCancel(false);
    setCancelReservationId(null);
    setUnregisteredUserId(undefined);
  }, []);

  const handleRemoveReservation = useCallback(() => {
    if (cancelReservationId) {
      if (user?.email) {
        dispatch(
          cancelRegisteredUserReservation({
            reservationId: cancelReservationId,
            userId: user?.email,
          })
        );
      } else {
        unregisteredUserId &&
          dispatch(
            cancelUnregisteredUserReservation({ reservationId: cancelReservationId, userId: unregisteredUserId })
          );
      }
    }

    handleCloseCancelModal();
  }, [cancelReservationId, dispatch, handleCloseCancelModal, unregisteredUserId, user?.email]);

  const toggleCancelModalOpen = useCallback((reservationId: number, userId?: string) => {
    setCancel(true);
    setCancelReservationId(reservationId);
    setUnregisteredUserId(userId);
  }, []);

  return { openRemoveModal: cancel, handleRemoveReservation, handleCloseCancelModal, toggleCancelModalOpen };
};
