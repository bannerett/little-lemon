import { MouseEvent } from 'react';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { SpecialDish } from 'types/SpecialDish';
import { X } from 'phosphor-react';
import { addOrder, deleteOrder, removeOrder } from 'store/order/orderSlice';
import { useAppDispatch } from 'store/store.hooks';

interface OrderCardProps {
  order: SpecialDish;
  count: number;
}

function OrderCard({ order: { id, price, heading }, count }: OrderCardProps) {
  const dispatch = useAppDispatch();
  const handleAdd = ({ currentTarget: { dataset } }: MouseEvent<HTMLElement>) => {
    if (dataset.id) dispatch(addOrder(dataset.id));
  };

  const handleSub = ({ currentTarget: { dataset } }: MouseEvent<HTMLElement>) => {
    if (dataset.id) dispatch(removeOrder(dataset.id));
  };

  const handleDelete = ({ currentTarget: { dataset } }: MouseEvent<HTMLElement>) => {
    if (dataset.id) dispatch(deleteOrder(dataset.id));
  };

  return (
    <Card w="100%" backgroundColor="primary.yellow" color="primary.green" borderRadius={16}>
      <CardHeader py={2}>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading size="lg" w="100%">
            {heading}
          </Heading>

          <Button
            variant="unstyled"
            display="flex"
            minW="unset"
            w="20px"
            h="20px"
            aria-label="remove"
            data-id={id}
            onClick={handleDelete}
          >
            <X size={20} aria-label="remove" />
          </Button>
        </Flex>
      </CardHeader>
      <CardBody py={2}>
        <SimpleGrid columns={2}>
          <Box>Price: </Box>
          <Box>
            {Number((price * count).toFixed(2)).toLocaleString(window.navigator.language, {
              style: 'currency',
              currency: 'USD',
            })}
          </Box>
        </SimpleGrid>
      </CardBody>
      <CardFooter py={2}>
        <HStack columnGap={2}>
          <Button variant="unstyled" data-id={id} onClick={handleSub}>
            Remove
          </Button>
          <Text px={2} fontWeight={600} fontSize="lg">
            {count}
          </Text>
          <Button variant="unstyled" data-id={id} onClick={handleAdd}>
            Add
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
}

export default OrderCard;
