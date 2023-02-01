import React, { FormEvent } from 'react';
import { Button, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import FormInput from 'components/FormInput';
import { useAppDispatch, useAppSelector } from 'store/store.hooks';
import { placeOrder, resetOrder, selectOrderStatus } from 'store/order/orderSlice';

function PlaceOrderModal() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectOrderStatus);

  const onClose = () => {
    dispatch(placeOrder(false));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(resetOrder());
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent borderRadius={16}>
        <ModalBody>
          <form onSubmit={onSubmit}>
            <FormInput type="text" name="name" label="Name" placeholder="Name" />
            <FormInput type="text" name="email" label="Email" placeholder="Email" />
            <FormInput type="tel" name="telephone" label="Phone" placeholder="Phone" />
            <FormInput type="text" name="city" label="City" placeholder="City" isReadOnly value="Chicago" />
            <FormInput type="text" name="street" label="Street" placeholder="Ex: Main Road, 42" />
            <Button
              type="submit"
              w="100%"
              my={4}
              backgroundColor="primary.yellow"
              color="primary.green"
              _hover={{ backgroundColor: 'primary.green', color: 'primary.yellow' }}
              fontSize={18}
            >
              Order
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default PlaceOrderModal;
