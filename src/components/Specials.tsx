import { useSelector } from 'react-redux';
import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import DishCard from 'components/DishCard/DishCard';
import NavLink from 'components/Navbar/NavLink';
import { selectMenu } from 'store/menu/menuSlice';
import { contentStyles } from 'constants/contentStyles';
import { selectOrder } from 'store/order/orderSlice';

function Specials() {
  const specials = useSelector(selectMenu);
  const order = useSelector(selectOrder);

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
          <DishCard key={special.id} {...special} count={order?.[special.id]} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Specials;
