import { Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { List, ShoppingCart } from 'phosphor-react';
import NavLink from 'components/Navbar/NavLink';
import { HeaderLink } from 'types/HeaderLink';
import brandLogo from 'assets/img/Asset 16@4x.png';

const renderMenuLinks = (links: HeaderLink[]) =>
  links.map(({ id, props: { label, to } }) => (
    <MenuItem key={id} as={NavLink} to={to} id={`header-link-${id}`} mb={1}>
      {label}
    </MenuItem>
  ));

interface NavbarSMProps {
  links: HeaderLink[];
}

function NavbarSm({ links }: NavbarSMProps) {
  return (
    <Flex display={['flex', 'none']} direction="row" justifyContent="space-between" alignItems="center" px={2}>
      <Menu>
        <MenuButton as={IconButton} aria-label="Menu" icon={<List size={32} />} variant="link" />
        <MenuList>{renderMenuLinks(links)}</MenuList>
      </Menu>

      <NavLink to="/">
        <Image src={brandLogo} maxH="42px" maxW={200} />
      </NavLink>

      <IconButton variant="link" icon={<ShoppingCart size={32} />} aria-label="Shopping Cart" />
    </Flex>
  );
}

export default NavbarSm;
