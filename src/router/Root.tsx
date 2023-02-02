import { useCallback, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer';
import { useAppDispatch } from 'store/store.hooks';
import { authLogin } from 'store/auth/authSlice';
import { setReservations, setUnregisteredUserReservations } from 'store/reservations/reservationsSlice';
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
    const unregisteredUserReservations = localStorage.getItem('unregisteredUserReservations');

    if (reservations && JSON.parse(reservations)) {
      dispatch(setReservations(JSON.parse(reservations)));
    }

    if (unregisteredUserReservations && JSON.parse(unregisteredUserReservations)) {
      dispatch(setUnregisteredUserReservations(JSON.parse(unregisteredUserReservations)));
    }
  }, [dispatch]);

  return (
    <Container maxW={1440} px={0}>
      <Navbar />
      <Box minH="calc(100vh - 120px)">
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
}

export default Root;
