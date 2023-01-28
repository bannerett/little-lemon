import { memo, MouseEvent, useCallback } from 'react';
import { Card, CardBody, Image } from '@chakra-ui/react';
import { useAppDispatch } from 'store/store';
import { SpecialDish } from 'types/SpecialDish';
import { addOrder, removeOrder } from 'store/order/orderSlice';
import DishCardHeader from 'components/DishCard/DishCardHeader';
import DishCardFooter from 'components/DishCard/DishCardFooter';

const DishCard = memo<SpecialDish>(({ id, imgSrc, heading, price, description, icon, label, count }) => {
  const dispatch = useAppDispatch();

  const handleAdd = useCallback(
    ({ currentTarget: { dataset } }: MouseEvent<HTMLElement>) => {
      if (dataset.id) dispatch(addOrder(id));
    },
    [dispatch, id]
  );

  const handleRemove = useCallback(
    ({ currentTarget: { dataset } }: MouseEvent<HTMLElement>) => {
      if (dataset.id) dispatch(removeOrder(id));
    },
    [dispatch, id]
  );

  return (
    <Card rounded={16} overflow="hidden">
      <Image src={imgSrc} objectFit="cover" h={186} />
      <DishCardHeader heading={heading} price={price} />
      <CardBody lineHeight={1.125}>{description}</CardBody>
      <DishCardFooter
        id={id}
        label={label}
        count={count}
        icon={icon}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
      />
    </Card>
  );
});

export default DishCard;
