import NavLink from 'components/Navbar/NavLink';
import { HStack, Image } from '@chakra-ui/react';
import { renderNavLinks } from 'components/Navbar/renderNavLinks';
import { HeaderLink } from 'types/HeaderLink';
import brandLogo from 'assets/img/Asset 16@4x.png';

interface NavbarMDProps {
  links: HeaderLink[];
}

function NavbarMd({ links }: NavbarMDProps) {
  return (
    <HStack
      as="nav"
      maxW={900}
      mx="auto"
      display={['none', 'flex']}
      justifyContent="space-between"
      px={{ sm: 4, md: 0 }}
    >
      <NavLink to="/" mr={8} maxW={200}>
        <Image src={brandLogo} />
      </NavLink>

      <HStack spacing={{ md: 2, lg: 4 }}>{renderNavLinks(links)}</HStack>
    </HStack>
  );
}

export default NavbarMd;
