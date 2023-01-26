import { Helmet } from 'react-helmet-async';
import { Box, Flex, Heading, Table, TableContainer, Tbody, Td, Text, Tr } from '@chakra-ui/react';
import AnimatePage from 'components/AnimatePage';
import { contentStyles } from 'constants/contentStyles';

function About() {
  return (
    <AnimatePage>
      <Helmet>
        <title>Little Lemon - About</title>
      </Helmet>

      <Box backgroundColor="primary.green" color="white">
        <Box as="section" maxW={900} mx="auto" py={8} {...contentStyles}>
          <Heading color="primary.yellow" size={['3xl']} mb={4} lineHeight={10}>
            Little Lemon
          </Heading>
          <Text>
            Is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur commodi, culpa id, illum
              impedit ipsam iste maxime omnis quam, repellat sit sunt ullam? Doloremque neque qui rerum sunt
              voluptatibus!
            </span>
            <span>
              Ab aut delectus dolorem ea eligendi eveniet incidunt ipsa, iusto laborum libero natus nihil omnis
              perspiciatis sed totam. A atque corporis dicta dolorem eius laboriosam maxime natus necessitatibus quod
              vero?
            </span>
            <span>
              Ab ad aliquam assumenda at dignissimos dolor, dolore doloremque ducimus eum harum hic itaque molestias
              perferendis praesentium quae quam quas quis quisquam ratione rem rerum saepe sapiente unde veniam vero.
            </span>
          </Text>
        </Box>
      </Box>

      <Box as="section" maxW={900} mx="auto" py={8} {...contentStyles} aria-label="Opening hours">
        <Flex columnGap={4} rowGap={4} direction={['column', 'row']}>
          <Box w={['100%', '30%']} mt={1}>
            <Heading size="xl" noOfLines={1}>
              Opening Hours:
            </Heading>
          </Box>
          <Box w={['100%', '70%']}>
            <TableContainer fontSize={18}>
              <Table>
                <Tbody>
                  <Tr>
                    <Td>Mon - Th</Td>
                    <Td>10:00 am - 9:00 pm</Td>
                  </Tr>
                  <Tr>
                    <Td>Fri - Sat</Td>
                    <Td>10:00 am - 11:00 pm</Td>
                  </Tr>
                  <Tr>
                    <Td>Sun</Td>
                    <Td>10:00 am - 9:00 pm</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Flex>
      </Box>

      <Box as="section" maxW={900} mx="auto" py={8} {...contentStyles} aria-label="Location">
        <Flex columnGap={4} rowGap={4} direction={['column', 'row']}>
          <Box w={['100%', '30%']}>
            <Heading size="xl" noOfLines={1}>
              Location:
            </Heading>
          </Box>
          <Box w={['100%', '70%']} pt={2}>
            <Text>Chicago, US</Text>
          </Box>
        </Flex>
      </Box>

      <Box as="section" maxW={900} mx="auto" py={8} {...contentStyles} aria-label="Contacts">
        <Flex columnGap={4} rowGap={4} direction={['column', 'row']}>
          <Box w={['100%', '30%']}>
            <Heading size="xl" noOfLines={1}>
              Contacts:
            </Heading>
          </Box>
          <Box w={['100%', '70%']} pt={2}>
            <Text>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto, at consequuntur corporis cum
                dignissimos dolore doloremque dolores eveniet excepturi harum ipsam nam, quae quis ratione sapiente
                similique voluptates! Ipsum.
              </span>
              <span>
                Ab alias animi aperiam asperiores consectetur deleniti dicta distinctio doloremque ducimus eius eos ex
                explicabo in ipsa molestias necessitatibus nobis officia perferendis possimus quae, reiciendis saepe
                sapiente sed veritatis vitae.
              </span>
            </Text>
          </Box>
        </Flex>
      </Box>
    </AnimatePage>
  );
}

export default About;
