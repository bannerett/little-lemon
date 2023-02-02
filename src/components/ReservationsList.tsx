import { MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { Box, Card, CardBody, CardHeader, CloseButton, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import { selectReservations } from 'store/reservations/reservationsSlice';
import { selectUserEmail } from 'store/auth/authSlice';

function ReservationsList({ toggleCancelModalOpen }: { toggleCancelModalOpen: (reservationId: number) => void }) {
  const userEmail = useSelector(selectUserEmail);
  const reservations = useSelector(selectReservations(userEmail));

  const handleCancelClick = ({ currentTarget: { dataset } }: MouseEvent<HTMLElement>) => {
    if (dataset.id) {
      toggleCancelModalOpen(Number(dataset.id));
    }
  };

  return (
    <Box w="100%" whiteSpace={['normal', 'nowrap']} overflow="hidden" overflowX="scroll">
      {reservations &&
        Object.values(reservations).map(({ id, username, date: resDate, time, guests }) => {
          const date = dayjs(resDate.concat(time));
          return (
            <Card
              key={id}
              display="inline-block"
              border="1px solid rgba(0,0,0,0.075)"
              borderRadius={16}
              mr={4}
              shadow={0}
              color="primary.green"
              backgroundColor="primary.yellow"
              w={['100%', 'fit-content']}
              mb={[4, 0]}
            >
              <CardHeader pb={2}>
                <HStack justifyContent="space-between">
                  <Text fontWeight={600} noOfLines={1}>
                    Table for {username}
                  </Text>
                  <CloseButton data-id={id} data-userid={userEmail} onClick={handleCancelClick} />
                </HStack>
              </CardHeader>
              <CardBody pt={0}>
                <SimpleGrid columns={2}>
                  <Box>Date:</Box>
                  <Box fontWeight={600}>{date.format('L')}</Box>
                  <Box>Time:</Box>
                  <Box fontWeight={600}>{date.format('LT')}</Box>
                  <Box>Guests:</Box>
                  <Box fontWeight={600}>{guests}</Box>
                </SimpleGrid>
              </CardBody>
            </Card>
          );
        })}
    </Box>
  );
}

export default ReservationsList;
