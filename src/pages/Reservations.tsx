import { Helmet } from 'react-helmet-async';
import { Box } from '@chakra-ui/react';
import AnimatePage from 'components/AnimatePage';
import ReserveTableForm from 'components/ReserveTableForm';
import { contentStyles } from 'constants/contentStyles';

function Reservations() {
  return (
    <AnimatePage>
      <Helmet>
        <title>Little Lemon - Order Online</title>
      </Helmet>
      <Box as="section" {...contentStyles} maxW={900} mx="auto" py={8}>
        <ReserveTableForm />
      </Box>
    </AnimatePage>
  );
}

export default Reservations;
