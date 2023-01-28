import { Helmet } from 'react-helmet-async';
import { Box } from '@chakra-ui/react';
import AnimatePage from 'components/AnimatePage';
import CancelReservationModal from 'components/CancelReservationModal';
import ReserveTableForm from 'components/ReserveTableForm';
import ReservationsList from 'components/ReservationsList';
import { useReservations } from 'hooks/useReservations';
import { contentStyles } from 'constants/contentStyles';

function Reservations() {
  const { openRemoveModal, handleRemoveReservation, handleCloseCancelModal, toggleCancelModalOpen } = useReservations();

  return (
    <AnimatePage>
      <Helmet>
        <title>Little Lemon - Reserve a table</title>
      </Helmet>
      <Box as="section" {...contentStyles} maxW={900} mx="auto" py={8}>
        <ReservationsList toggleCancelModalOpen={toggleCancelModalOpen} />
        <ReserveTableForm />
        <CancelReservationModal
          isOpen={openRemoveModal}
          handleCancel={handleCloseCancelModal}
          handleSubmit={handleRemoveReservation}
        />
      </Box>
    </AnimatePage>
  );
}

export default Reservations;
