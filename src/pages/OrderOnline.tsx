import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import AnimatePage from 'components/AnimatePage';
import { contentStyles } from 'constants/contentStyles';

function OrderOnline() {
  return (
    <AnimatePage>
      <Helmet>
        <title>Little Lemon - Order Online</title>
      </Helmet>
      <Box as="section" {...contentStyles} maxW={900} mx="auto" py={8}>
        Order online
      </Box>
    </AnimatePage>
  );
}

export default OrderOnline;
