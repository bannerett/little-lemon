import { forwardRef } from 'react';
import { NavLink as RouterLink, NavLinkProps } from 'react-router-dom';
import { Link, LinkProps } from '@chakra-ui/react';

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps & LinkProps>(({ children, ...props }, ref) => {
  return (
    <Link
      ref={ref}
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
});

export default NavLink;
