import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { contentStyles } from 'constants/contentStyles';
import heroLogo from 'assets/img/hero-thumb.jpg';

function Hero() {
  return (
    <Box as="section" id="hero" backgroundColor="primary.green" pt={8} pb={5} mb={24}>
      <Stack direction={['column', 'row']} spacing={4} {...contentStyles}>
        {/* <Box w="100%" pl={[6, 8]}> */}
        <Box w="100%">
          <Box maxW={340}>
            <Heading color="primary.yellow" size={['3xl']} mb={0} lineHeight={10}>
              Little Lemon
            </Heading>
            <Heading size="xl" color="white" mt={0} mb={4} lineHeight={10}>
              Chicago
            </Heading>

            <Text color="white" fontSize="xl" lineHeight={1.25} fontWeight="semibold" mb={3}>
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </Text>

            <Button color="primary.green" backgroundColor="primary.yellow" borderRadius={16}>
              Reserve a table
            </Button>
          </Box>
        </Box>

        <Box w={['100%', '100%', '50%']} position="relative">
          <Image
            src={heroLogo}
            position={['relative', 'absolute']}
            top={0}
            right={[0, 4, 0, 0, 0]}
            objectFit="cover"
            w={['100%', 300]}
            h={340}
            borderRadius={16}
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default Hero;
