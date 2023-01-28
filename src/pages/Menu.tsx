import { Box } from '@chakra-ui/react';
import AnimatePage from '../components/AnimatePage';
import { Helmet } from 'react-helmet-async';
import { contentStyles } from '../constants/contentStyles';

function Menu() {
  return (
    <AnimatePage>
      <Helmet>
        <title>Little Lemon - Menu</title>
      </Helmet>
      <Box as="section" {...contentStyles} maxW={900} mx="auto" py={8}>
        Menu
      </Box>
    </AnimatePage>
  );
}

export default Menu;
