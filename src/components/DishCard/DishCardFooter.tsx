import { MouseEvent, ReactElement } from 'react';
import { Box, Button, CardFooter, Flex } from '@chakra-ui/react';
import { Bicycle, Minus, Plus } from 'phosphor-react';

interface DishCardFooterProps {
  id: string;
  label: string;
  count?: number;
  icon?: ReactElement;
  handleAdd: (e: MouseEvent<HTMLElement>) => void;
  handleRemove: (e: MouseEvent<HTMLElement>) => void;
}

function DishCardFooter({ id, label, count, icon, handleAdd, handleRemove }: DishCardFooterProps) {
  return (
    <CardFooter>
      {!count ? (
        <Button
          variant="link"
          data-id={id}
          rightIcon={icon ?? <Bicycle size={20} />}
          onClick={handleAdd}
          fontWeight={700}
        >
          {label}
        </Button>
      ) : (
        <Flex alignItems="center" justifyContent="center" fontWeight={700} lineHeight={1.125}>
          <Button variant="link" data-id={id} data-label={label} onClick={handleRemove}>
            <Minus />
          </Button>
          <Box px={2}>{count}</Box>
          <Button variant="link" data-id={id} data-label={label} onClick={handleAdd}>
            <Plus />
          </Button>
        </Flex>
      )}
    </CardFooter>
  );
}

export default DishCardFooter;
