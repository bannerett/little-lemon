import React from 'react';
import { Box, Button, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from 'store/store.hooks';
import { placeOrder, selectOrderCount, selectOrderPrice } from 'store/order/orderSlice';
import { numberToFixedUsdCurrency } from 'utils/numberToFixedUsdCurrency';
import PlaceOrderModal from './PlaceOrderModal';

function OrdersTotal() {
  const dispatch = useAppDispatch();
  const totalPrice = useAppSelector(selectOrderPrice);
  const dishesCount = useAppSelector(selectOrderCount);

  console.log(dishesCount);

  const order = () => {
    dispatch(placeOrder(true));
  };

  return (
    <>
      <VStack alignItems="flex-start">
        <SimpleGrid columns={2} columnGap={4} alignItems="center">
          <Heading>Total price: </Heading>
          <Text fontWeight={600}>{numberToFixedUsdCurrency(totalPrice)}</Text>
          <Heading>Dishes: </Heading>
          <Text fontWeight={600}>{dishesCount}</Text>
          <Box pt={4}>
            <Button
              variant="unstyled"
              backgroundColor="primary.yellow"
              color="primary.green"
              _hover={{ textDecoration: dishesCount ? 'underline' : 'none' }}
              px={8}
              fontSize={18}
              onClick={order}
              isDisabled={!dishesCount}
            >
              Order
            </Button>
          </Box>
        </SimpleGrid>
      </VStack>

      <PlaceOrderModal />
    </>
  );
}

export default OrdersTotal;
