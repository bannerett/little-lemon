import { MouseEvent, useCallback, useMemo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import NavbarMD from 'components/Navbar/NavbarMD';
import NavbarSM from 'components/Navbar/NavbarSM';
import { HeaderLink } from 'types/HeaderLink';
import { authLogout, selectUserEmail } from 'store/auth/authSlice';
import { useAppDispatch } from 'store/store';

function Navbar() {
  const dispatch = useAppDispatch();
  const userEmail = useSelector(selectUserEmail, shallowEqual);

  const logout = useCallback(
    (_: MouseEvent<HTMLElement>) => {
      dispatch(authLogout());
    },
    [dispatch]
  );

  const navLinks = useMemo(
    (): HeaderLink[] => [
      { id: 'home', props: { to: '/', label: 'Home' } },
      { id: 'about', props: { to: '/about', label: 'About' } },
      { id: 'menu', props: { to: '/menu', label: 'Menu' } },
      { id: 'reservations', props: { to: '/reservations', label: 'Reservations', disabled: !userEmail } },
      { id: 'orderOnline', props: { to: '/order-online', label: 'Order Online' } },
      {
        id: 'login',
        props: { to: '/login', label: 'Login', type: !userEmail ? 'link' : 'button', action: logout },
      },
    ],
    [logout, userEmail]
  );

  return (
    <Box as="header" height="100%" py={[4, 4, 4, 8]} px={{ md: 8 }} borderBottom="1px solid rgba(0,0,0,0.075)">
      <NavbarMD links={navLinks} />
      <NavbarSM links={navLinks} />
    </Box>
  );
}

export default Navbar;
