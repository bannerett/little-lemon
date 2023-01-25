import { useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container, HStack, Image } from '@chakra-ui/react';
import NavLink from 'components/NavLink';
import brandLogo from 'assets/img/Asset 16@4x.png';

interface HeaderLink {
  id: string;
  props: { to: string; label: string };
}

const navLinks: HeaderLink[] = [
  { id: 'home', props: { to: '/', label: 'Home' } },
  { id: 'about', props: { to: '/about', label: 'About' } },
];

function Root() {
  const renderNavLinks = useCallback(
    (links: HeaderLink[]) =>
      links.map(({ id, props: { to, label } }) => (
        <NavLink key={id} to={to} id={`header-link-${id}`}>
          {label}
        </NavLink>
      )),
    []
  );

  return (
    <Container maxW={1440} px={[4, 8, 70]}>
      <Box as="header" height="100%" py={8}>
        <HStack>
          <NavLink to="/" mr={8} maxW={200}>
            <Image src={brandLogo} />
          </NavLink>
          {renderNavLinks(navLinks)}
        </HStack>
      </Box>

      <Outlet />
    </Container>
  );
}

export default Root;
