import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Section from 'components/Section';
import NavLink from 'components/Navbar/NavLink';
import logoA from 'assets/img/mario-and-adrian-a.jpg';
import logoB from 'assets/img/mario-and-adrian-b.jpg';

function AboutDescription() {
  const location = useLocation();

  return (
    <Box bgColor="primary.green" color="primary.yellow">
      <Section>
        <Flex flexDirection={['column', 'row']}>
          <Box maxW={340}>
            <Heading color="primary.yellow" size={['3xl']} mb={0} lineHeight={10}>
              Little Lemon
            </Heading>
            <Heading size="xl" color="white" mt={0} mb={4} lineHeight={10}>
              Chicago
            </Heading>

            <Text color="white" fontSize="xl" lineHeight={1.25} fontWeight={600} mb={2}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam animi aperiam aut autem
              commodi corporis dicta, dolore dolorum enim illo ipsum iste laborum minus quisquam reiciendis, rem
              reprehenderit tempore.
            </Text>

            {!location.pathname.includes('about') && (
              <NavLink
                display="block"
                variant="button"
                to="/about"
                color="primary.green"
                backgroundColor="primary.yellow"
                borderRadius={16}
                fontSize={18}
                fontWeight={400}
                textAlign="center"
                py={2.5}
                px={10}
                w="fit-content"
              >
                More
              </NavLink>
            )}
          </Box>

          <Box w="100%">
            <Box position="relative" h={320}>
              <Image
                src={logoB}
                alt="logo"
                position="absolute"
                top={2}
                right={['5%', 0]}
                objectFit="cover"
                width={200}
                h={250}
                borderRadius={16}
              />
              <Image
                src={logoA}
                alt="logo"
                position="absolute"
                top={16}
                right={['35%', '25%']}
                objectFit="cover"
                width={200}
                h={250}
                borderRadius={16}
              />
            </Box>
          </Box>
        </Flex>
      </Section>
    </Box>
  );
}

export default AboutDescription;
