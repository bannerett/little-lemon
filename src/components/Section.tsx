import { Box, BoxProps } from '@chakra-ui/react';
import { contentStyles } from 'constants/contentStyles';

function Section({ children, ...rest }: BoxProps) {
  return (
    <Box as="section" {...contentStyles} {...rest}>
      {children}
    </Box>
  );
}

export default Section;
