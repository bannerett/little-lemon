import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

function CancelReservationModal({
  isOpen,
  handleCancel,
  handleSubmit,
}: {
  isOpen: boolean;
  handleCancel: () => void;
  handleSubmit: () => void;
}) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={handleCancel}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontWeight={600}>Cancel reservation?</ModalHeader>
        <ModalCloseButton />

        <ModalFooter>
          <Button minW="80px" colorScheme="red" mr={3} onClick={handleSubmit}>
            Yes
          </Button>
          <Button minW="80px" colorScheme="green" onClick={handleCancel}>
            No
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CancelReservationModal;
