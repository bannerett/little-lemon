import { ReactNode } from 'react';
import { Box, ScaleFade } from '@chakra-ui/react';

function AnimatePage({ children }: { children: ReactNode }) {
  return (
    <ScaleFade initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.45 } }} exit={{ opacity: 0 }}>
      <Box as="main" maxW={1440} mx="auto">
        {children}
      </Box>
    </ScaleFade>
  );
}

export default AnimatePage;
