import AnimatePage from 'components/AnimatePage';
import CancelReservationModal from 'components/CancelReservationModal';
import ReserveTableForm from 'components/ReserveTableForm';
import ReservationsList from 'components/ReservationsList';
import PageDescription from 'components/PageDescription';
import Section from 'components/Section';
import { useReservations } from 'hooks/useReservations';

function Reservations() {
  const { openRemoveModal, handleRemoveReservation, handleCloseCancelModal, toggleCancelModalOpen } = useReservations();

  return (
    <AnimatePage>
      <PageDescription heading="Reservations" title="Reserve a table">
        <ReservationsList toggleCancelModalOpen={toggleCancelModalOpen} />
      </PageDescription>

      <Section>
        <ReserveTableForm />
        <CancelReservationModal
          isOpen={openRemoveModal}
          handleCancel={handleCloseCancelModal}
          handleSubmit={handleRemoveReservation}
        />
      </Section>
    </AnimatePage>
  );
}

export default Reservations;
