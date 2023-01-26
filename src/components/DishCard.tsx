import { memo } from 'react';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, HStack, Image } from '@chakra-ui/react';
import { SpecialDish } from 'types/SpecialDish';
import { Minus, Plus } from 'phosphor-react';

const DishCard = memo<SpecialDish>(
  ({ id, imgSrc, heading, price, description, icon, label, onAdd, onRemove, count }) => {
    console.log('render', count);
    return (
      <Card rounded={16} overflow="hidden">
        <Image src={imgSrc} objectFit="cover" h={186} />
        <CardHeader>
          <HStack justifyContent="space-between">
            <Heading fontSize={24} fontWeight={500} noOfLines={1}>
              {heading}
            </Heading>
            <Box>{price.toLocaleString(window.navigator.language, { style: 'currency', currency: 'USD' })}</Box>
          </HStack>
        </CardHeader>

        <CardBody lineHeight={1.125}>{description}</CardBody>

        <CardFooter>
          {!count ? (
            <Button variant="link" data-id={id} rightIcon={icon} onClick={onAdd} fontWeight={700}>
              {label}
            </Button>
          ) : (
            <Flex alignItems="center" justifyContent="center" fontWeight={700} lineHeight={1.125}>
              <Button variant="link" data-id={id} onClick={onRemove}>
                <Minus />
              </Button>
              <Box px={2}>{count}</Box>
              <Button variant="link" data-id={id} onClick={onAdd}>
                <Plus />
              </Button>
            </Flex>
          )}
        </CardFooter>
      </Card>
    );
  }
);

export default DishCard;
