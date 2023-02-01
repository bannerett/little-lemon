import { useCallback, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import Navbar from 'components/Navbar/Navbar';
import { useAppDispatch } from 'store/store.hooks';
import { authLogin } from 'store/auth/authSlice';
import { setReservations } from 'store/reservations/reservationsSlice';
import { UserAuth } from 'types/UserAuth';

function Root() {
  const dispatch = useAppDispatch();

  const handleLogin = useCallback(
    (u: UserAuth) => {
      dispatch(authLogin(u));
    },
    [dispatch]
  );

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user && JSON.parse(user)?.id) {
      handleLogin(JSON.parse(user));
    }
  }, [dispatch, handleLogin]);

  useEffect(() => {
    const reservations = localStorage.getItem('reservations');

    if (reservations && JSON.parse(reservations)) {
      dispatch(setReservations(JSON.parse(reservations)));
    }
  }, [dispatch]);

  return (
    <Container maxW={1440} px={0}>
      <Navbar />
      <Outlet />
    </Container>
  );
}

export default Root;
