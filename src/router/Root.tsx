import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import Navbar from 'components/Navbar/Navbar';

function Root() {
  return (
    <Container maxW={1440} px={[4, 8, 70]}>
      <Navbar />

      <Outlet />
    </Container>
  );
}

export default Root;
