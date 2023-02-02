import { Box, ScaleFade } from '@chakra-ui/react';
import Hero from 'components/Hero';
import Specials from 'components/Specials';
import Testimonials from 'components/Testimonials';
import AboutDescription from 'components/AboutDescription';

function Home() {
  return (
    <ScaleFade initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Box as="main">
        <Hero />
        <Specials />
        <Testimonials />
        <AboutDescription />
      </Box>
    </ScaleFade>
  );
}

export default Home;
