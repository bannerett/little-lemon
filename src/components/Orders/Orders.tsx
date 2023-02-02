import { shallowEqual, useSelector } from 'react-redux';
import { SimpleGrid } from '@chakra-ui/react';
import { selectMenuById } from 'store/menu/menuSlice';
import { selectOrder } from 'store/order/orderSlice';
import OrderCard from 'components/Orders/OrderCard';

function Orders() {
  const menuById = useSelector(selectMenuById, shallowEqual);
  const order = useSelector(selectOrder, shallowEqual);

  return (
    <SimpleGrid columns={[1, 2, 4]} columnGap={4} rowGap={4}>
      {Object.entries(order)
        .filter(([_, v]) => v)
        .map(([key, value]) => (
          <OrderCard key={key} order={menuById[key]} count={value} />
        ))}
    </SimpleGrid>
  );
}

export default Orders;
