import NavLink from 'components/Navbar/NavLink';
import { HStack, Image } from '@chakra-ui/react';
import { HeaderLink } from 'types/HeaderLink';
import brandLogo from 'assets/img/Asset 16@4x.png';

const renderNavLinks = (links: HeaderLink[]) =>
  links.map(({ id, props: { to, label } }) => (
    <NavLink key={id} to={to} id={`header-link-${id}`}>
      {label}
    </NavLink>
  ));

interface NavbarMDProps {
  links: HeaderLink[];
}

function NavbarMd({ links }: NavbarMDProps) {
  return (
    <HStack spacing={4} maxW={900} mx="auto" display={['none', 'flex']}>
      <NavLink to="/" mr={8} maxW={200}>
        <Image src={brandLogo} />
      </NavLink>

      {renderNavLinks(links)}
    </HStack>
  );
}

export default NavbarMd;
