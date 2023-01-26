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
          <HStack>
            <Heading>{heading}</Heading>
            <Box>{price}</Box>
          </HStack>
        </CardHeader>

        <CardBody>{description}</CardBody>

        <CardFooter>
          {!count ? (
            <Button variant="link" data-id={id} onClick={onAdd} rightIcon={icon}>
              {label}
            </Button>
          ) : (
            <Flex alignItems="center" justifyContent="center">
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
