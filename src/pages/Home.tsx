import { Box, ScaleFade } from '@chakra-ui/react';
import Hero from 'components/Hero';
import Specials from 'components/Specials';

function Home() {
  return (
    <ScaleFade initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Box as="main">
        <Hero />
        <Specials />
      </Box>
    </ScaleFade>
  );
}

export default Home;
