import { Box } from '@chakra-ui/react';
import NavbarMD from 'components/Navbar/NavbarMD';
import NavbarSM from 'components/Navbar/NavbarSM';
import { HeaderLink } from 'types/HeaderLink';

const navLinks: HeaderLink[] = [
  { id: 'home', props: { to: '/', label: 'Home' } },
  { id: 'about', props: { to: '/about', label: 'About' } },
  { id: 'menu', props: { to: '/menu', label: 'Menu' } },
  { id: 'reservations', props: { to: '/reservations', label: 'Reservations' } },
  { id: 'orderOnline', props: { to: '/order-online', label: 'Order Online' } },
  { id: 'login', props: { to: '/login', label: 'Login' } },
];

function Navbar() {
  return (
    <Box as="header" height="100%" py={[4, 4, 4, 8]} px={{ md: 8 }}>
      <NavbarMD links={navLinks} />
      <NavbarSM links={navLinks} />
    </Box>
  );
}

export default Navbar;
