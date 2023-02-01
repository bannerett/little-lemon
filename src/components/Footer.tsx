import React from 'react';
import { Box, Grid, GridItem, Image, SimpleGrid, VStack } from '@chakra-ui/react';
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
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']} gap={8}>
          <GridItem>
            <Image src={footerLogo} borderRadius={16} objectFit="cover" h="100%" />
          </GridItem>
          <GridItem>
            <VStack fontSize={18}>{renderNavLinks(links)}</VStack>
          </GridItem>
          <GridItem>
            <SimpleGrid columns={2} fontSize={18}>
              <Box>Address</Box>
              <Box mb={4}>Main Road, 42, Chicago</Box>
              <Box>Phone</Box>
              <Box mb={4}>1234567890</Box>
              <Box>Email</Box>
              <Box mb={4}>
                <a href="mailto:little-lemon@mail.com">Little Lemon</a>
              </Box>
            </SimpleGrid>
          </GridItem>
          <GridItem>
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
          </GridItem>
        </Grid>
      </Section>
    </Box>
  );
}

export default Footer;
