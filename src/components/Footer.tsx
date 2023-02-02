import { Box, Flex, HStack, Image, VStack } from '@chakra-ui/react';
import { FacebookLogo, InstagramLogo, WhatsappLogo } from 'phosphor-react';
import Section from 'components/Section';
import { useNavLinks } from 'hooks/useNavLinks';
import { renderNavLinks } from 'components/Navbar/renderNavLinks';
import footerLogo from 'assets/img/footer-logo.jpg';

function Footer() {
  const links = useNavLinks();

  return (
    <Box id="app-footer" bgColor="primary.yellow">
      <Section>
        <Flex direction={['column', 'row']} wrap={['wrap', 'wrap', 'nowrap']} columnGap={4} rowGap={4}>
          <Box w={200} minW={200}>
            <Image src={footerLogo} borderRadius={16} objectFit="cover" h="100%" />
          </Box>
          <Box w="50%">
            <VStack fontSize={18} alignItems="start" ml={[0, 8]}>
              {renderNavLinks(links)}
            </VStack>
          </Box>
          <Box w={['100%', '50%', '100%']}>
            <Flex fontSize={18} columnGap={4} direction="column">
              <HStack columnGap={4}>
                <Box w="20%">Address:</Box>
                <Box mb={4}>Main Road, 42, Chicago</Box>
              </HStack>
              <HStack columnGap={4}>
                <Box w="25%">Phone:</Box>
                <Box mb={4}>1234567890</Box>
              </HStack>
              <HStack columnGap={4}>
                <Box w="25%">Email:</Box>
                <Box mb={4}>
                  <a href="mailto:little-lemon@mail.com">Little Lemon</a>
                </Box>
              </HStack>
            </Flex>
          </Box>
          <Box w={['100%', 200]}>
            <VStack fontSize={18}>
              <Box>
                <FacebookLogo />
              </Box>
              <Box>
                <InstagramLogo />
              </Box>
              <Box>
                <WhatsappLogo />
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Section>
    </Box>
  );
}

export default Footer;
