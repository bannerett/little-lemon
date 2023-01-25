import { NavLink as RouterLink, NavLinkProps } from 'react-router-dom';
import { Link, LinkProps } from '@chakra-ui/react';

function NavLink({ children, ...props }: NavLinkProps & LinkProps) {
  return (
    <Link
      as={RouterLink}
      fontWeight="bold"
      fontSize={['md', 'xl']}
      color="secondary.dark"
      _activeLink={{ textDecoration: 'underline' }}
      {...props}
    >
      {children}
    </Link>
  );
}

export default NavLink;
