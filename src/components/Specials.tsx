import { useSelector } from 'react-redux';
import { MouseEventHandler, useCallback, useState } from 'react';
import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { Bicycle } from 'phosphor-react';
import DishCard from 'components/DishCard';
import NavLink from 'components/Navbar/NavLink';
import { selectMenu } from 'store/menu/menuSlice';
import { useAppDispatch } from 'store/store';
import { contentStyles } from 'constants/contentStyles';
import { addOrder, removeOrder, selectOrder } from 'store/order/orderSlice';

function Specials() {
  const dispatch = useAppDispatch();
  const specials = useSelector(selectMenu);
  const order = useSelector(selectOrder);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setOrder] = useState<null | Record<string, number>>(null);

  const handleAdd = useCallback<MouseEventHandler<HTMLButtonElement>>(
    ({
      currentTarget: {
        dataset: { id },
      },
    }) => {
      if (id) {
        setOrder(prev => ({ ...prev, [id]: (prev?.[id] ?? 0) + 1 }));
        dispatch(addOrder(id));
      }
    },
    [dispatch]
  );

  const handleRemove = useCallback<MouseEventHandler<HTMLButtonElement>>(
    ({
      currentTarget: {
        dataset: { id },
      },
    }) => {
      if (id) {
        // setOrder(prev => ({
        //   ...prev,
        //   [id]: (prev?.[id] ?? 0) - 1,
        // }));
        dispatch(removeOrder(id));
      }
    },
    [dispatch]
  );

  return (
    <Box as="section" id="specials" backgroundColor="white">
      <Flex alignItems="center" pb={2} {...contentStyles}>
        <Heading size="3xl" flex={1}>
          This Week&apos;s Specials!
        </Heading>

        <NavLink
          variant="button"
          to="/menu"
          color="primary.green"
          backgroundColor="primary.yellow"
          borderRadius={16}
          fontSize={18}
          fontWeight={400}
          textAlign="center"
          py={2.5}
          px={10}
          h={12}
        >
          Online Menu
        </NavLink>
      </Flex>

      <SimpleGrid columns={[1, 3]} columnGap={{ md: 4, lg: 8 }} rowGap={4} {...contentStyles}>
        {specials.map(special => (
          <DishCard
            key={special.id}
            {...special}
            count={order?.[special.id]}
            onAdd={handleAdd}
            onRemove={handleRemove}
            icon={<Bicycle size={20} />}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Specials;
