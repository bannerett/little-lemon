import { shallowEqual, useSelector } from 'react-redux';
import { SimpleGrid } from '@chakra-ui/react';
import { selectMenu } from 'store/menu/menuSlice';
import { selectOrder } from 'store/order/orderSlice';
import AnimatePage from 'components/AnimatePage';
import DishCard from 'components/DishCard/DishCard';
import Section from 'components/Section';
import PageDescription from 'components/PageDescription';

function Menu() {
  const menu = useSelector(selectMenu, shallowEqual);
  const orders = useSelector(selectOrder, shallowEqual);

  return (
    <AnimatePage>
      <PageDescription heading="Menu" title="Menu" description="Description of menu" />

      <Section>
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {menu.map(menuItem => (
            <DishCard key={menuItem.id} {...menuItem} count={orders[menuItem.id]} />
          ))}
        </SimpleGrid>
      </Section>
    </AnimatePage>
  );
}

export default Menu;
