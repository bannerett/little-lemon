import { ScaleFade } from '@chakra-ui/react';
import Hero from 'components/Hero';
import Specials from 'components/Specials';

function Home() {
  return (
    <ScaleFade
      initial={{ position: 'absolute', left: '-100%', width: '100%' }}
      animate={{ left: 0 }}
      exit={{ left: '200%' }}
    >
      <Hero />
      <Specials />
    </ScaleFade>
  );
}

export default Home;
