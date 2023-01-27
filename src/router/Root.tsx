import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import Navbar from 'components/Navbar/Navbar';
import { useEffect } from 'react';
import { useAppDispatch } from 'store/store';
import { setAuth } from 'store/auth/authSlice';

function Root() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user && JSON.parse(user)?.id) {
      dispatch(setAuth(JSON.parse(user)));
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
