import { memo } from 'react';
import { Box, CardHeader, Heading, HStack } from '@chakra-ui/react';

const DishCardHeader = memo<{ heading: string; price: number }>(({ heading, price }) => {
  return (
    <CardHeader>
      <HStack justifyContent="space-between">
        <Heading fontSize={24} fontWeight={500} noOfLines={1}>
          {heading}
        </Heading>
        <Box>{price.toLocaleString(window.navigator.language, { style: 'currency', currency: 'USD' })}</Box>
      </HStack>
    </CardHeader>
  );
});

export default DishCardHeader;
