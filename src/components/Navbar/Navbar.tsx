import { Box } from '@chakra-ui/react';
import NavbarMD from 'components/Navbar/NavbarMD';
import NavbarSM from 'components/Navbar/NavbarSM';
import { useNavLinks } from 'hooks/useNavLinks';

function Navbar() {
  const links = useNavLinks();

  return (
    <Box as="header" height="100%" py={[4, 4, 4, 8]} px={{ md: 8 }} borderBottom="1px solid rgba(0,0,0,0.075)">
      <NavbarMD links={links} />
      <NavbarSM links={links} />
    </Box>
  );
}

export default Navbar;
