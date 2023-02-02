import { Box } from '@chakra-ui/react';
import AnimatePage from 'components/AnimatePage';
import Hero from 'components/Hero';
import Specials from 'components/Specials';
import Testimonials from 'components/Testimonials';
import AboutDescription from 'components/AboutDescription';

function Home() {
  return (
    <AnimatePage>
      <Box as="main">
        <Hero />
        <Specials />
        <Testimonials />
        <AboutDescription />
      </Box>
    </AnimatePage>
  );
}

export default Home;
