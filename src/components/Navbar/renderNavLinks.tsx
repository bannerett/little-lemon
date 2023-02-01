import { Button } from '@chakra-ui/react';
import NavLink from 'components/Navbar/NavLink';
import { HeaderLink } from 'types/HeaderLink';

export const renderNavLinks = (links: HeaderLink[]) =>
  links.map(({ id, props: { to, label, type, action, disabled } }) => {
    if (type === 'button') {
      return (
        <Button
          variant="unstyled"
          fontSize={20}
          maxH="25px"
          lineHeight={1.25}
          w="fit-content"
          cursor="pointer"
          _hover={{ textDecoration: 'underline' }}
          key={id}
          type={type}
          onClick={action}
          isDisabled={disabled}
        >
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
