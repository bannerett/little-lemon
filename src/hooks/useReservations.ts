import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/store.hooks';
import { selectAuth } from 'store/auth/authSlice';
import { cancelTable } from 'store/reservations/reservationsSlice';

export const useReservations = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector(selectAuth);

  const [cancel, setCancel] = useState(false);
  const [cancelReservationId, setCancelReservationId] = useState<null | number>(null);

  useEffect(() => {
    if (!user?.email) {
      navigate('/');
    }
  }, [navigate, user?.email]);

  const handleRemoveReservation = useCallback(() => {
    if (cancelReservationId && user?.email) {
      dispatch(cancelTable({ reservationId: cancelReservationId, userId: user?.email }));
    }
    setCancel(false);
    setCancelReservationId(null);
  }, [cancelReservationId, dispatch, user?.email]);

  const handleCloseCancelModal = useCallback(() => {
    setCancel(false);
    setCancelReservationId(null);
  }, []);

  const toggleCancelModalOpen = useCallback((reservationId: number) => {
    setCancel(true);
    setCancelReservationId(reservationId);
  }, []);

  return { openRemoveModal: cancel, handleRemoveReservation, handleCloseCancelModal, toggleCancelModalOpen };
};
