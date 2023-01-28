import NavLink from 'components/Navbar/NavLink';
import { Button, HStack, Image } from '@chakra-ui/react';
import { HeaderLink } from 'types/HeaderLink';
import brandLogo from 'assets/img/Asset 16@4x.png';

const renderNavLinks = (links: HeaderLink[]) =>
  links.map(({ id, props: { to, label, type, action, disabled } }) => {
    if (type === 'button') {
      return (
        <Button key={id} type={type} onClick={action} isDisabled={disabled}>
          Logout
        </Button>
      );
    }

    return (
      <NavLink
        key={id}
        to={to}
        id={`header-link-${id}`}
        noOfLines={1}
        sx={{
          fontSize: { md: 18, lg: 20 },
          fontWeight: 500,
          lineHeight: 1.25,
          pointerEvents: disabled ? 'none' : 'all',
          color: disabled ? 'grey' : 'inherit',
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
      >
        {label}
      </NavLink>
    );
  });

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
