import { ReactNode } from 'react';
import { Box, ScaleFade } from '@chakra-ui/react';

function AnimatePage({ children }: { children: ReactNode }) {
  return (
    <ScaleFade
      initial={{ position: 'relative', left: '-100%', width: '100%' }}
      animate={{ left: 0, transition: { duration: 0.35 } }}
      exit={{ left: '200%' }}
    >
      <Box as="main" maxW={1440} mx="auto">
        {children}
      </Box>
    </ScaleFade>
  );
}

export default AnimatePage;
