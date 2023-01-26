import { MouseEventHandler, useCallback, useState } from 'react';
import { Box, Button, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { Bicycle } from 'phosphor-react';
import DishCard from 'components/DishCard';
import { contentStyles } from 'constants/contentStyles';
import { SpecialDish } from 'types/SpecialDish';
import greekSalad from 'assets/img/specials/greek-salad.jpg';
import bruchetta from 'assets/img/specials/bruchetta.jpg';
import lemonDessert from 'assets/img/specials/lemon-dessert.jpg';

const specials: SpecialDish[] = [
  {
    id: 'greek-salad',
    name: 'greek-salad',
    imgSrc: greekSalad,
    heading: 'Greek Salad',
    price: 12.99,
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
    label: 'Order a delivery',
  },
  {
    id: 'bruchetta',
    name: 'bruchetta',
    imgSrc: bruchetta,
    heading: 'Bruchetta',
    price: 5.99,
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
    label: 'Order a delivery',
  },
  {
    id: 'lemon-dessert',
    name: 'lemon-dessert',
    imgSrc: lemonDessert,
    heading: 'Lemon Dessert',
    price: 5.0,
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    label: 'Order a delivery',
  },
];

function Specials() {
  const [order, setOrder] = useState<null | Record<string, number>>(null);

  const handleAdd = useCallback<MouseEventHandler<HTMLButtonElement>>(
    ({
      currentTarget: {
        dataset: { id },
      },
    }) => {
      if (id) {
        setOrder(prev => ({ ...prev, [id]: (prev?.[id] ?? 0) + 1 }));
      }
    },
    []
  );

  const handleRemove = useCallback<MouseEventHandler<HTMLButtonElement>>(
    ({
      currentTarget: {
        dataset: { id },
      },
    }) => {
      if (id) {
        setOrder(prev => ({
          ...prev,
          [id]: (prev?.[id] ?? 0) - 1,
        }));
      }
    },
    []
  );

  return (
    <Box as="section" id="specials" backgroundColor="white">
      <Flex {...contentStyles}>
        <Heading size="3xl" flex={1}>
          This Week&apos;s Specials!
        </Heading>

        <Button color="primary.green" backgroundColor="primary.yellow" borderRadius={16}>
          Online Menu
        </Button>
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
