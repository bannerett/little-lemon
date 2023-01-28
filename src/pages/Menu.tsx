import { shallowEqual, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { selectMenu } from 'store/menu/menuSlice';
import { selectOrder } from 'store/order/orderSlice';
import AnimatePage from 'components/AnimatePage';
import DishCard from 'components/DishCard/DishCard';
import { contentStyles } from 'constants/contentStyles';

function Menu() {
  const menu = useSelector(selectMenu, shallowEqual);
  const orders = useSelector(selectOrder, shallowEqual);

  return (
    <AnimatePage>
      <Helmet>
        <title>Little Lemon - Menu</title>
      </Helmet>
      <Box as="section" {...contentStyles} maxW={900} mx="auto" py={8}>
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {menu.map(menuItem => (
            <DishCard key={menuItem.id} {...menuItem} count={orders[menuItem.id]} />
          ))}
        </SimpleGrid>
      </Box>
    </AnimatePage>
  );
}

export default Menu;
