import { ScaleFade } from '@chakra-ui/react';

function About() {
  return (
    <ScaleFade
      initial={{ position: 'absolute', left: '-100%', width: '100%' }}
      animate={{ left: 0 }}
      exit={{ left: '200%' }}
    >
      <div>About page</div>
    </ScaleFade>
  );
}

export default About;
