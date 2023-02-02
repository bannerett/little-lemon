import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from 'components/Section';
import TestimonialCard from 'components/TestimonialCard';
import customer1 from 'assets/img/customer-1.jpg';
import customer2 from 'assets/img/customer-2.jpg';
import customer3 from 'assets/img/customer-3.jpg';
import customer4 from 'assets/img/customer-4.jpg';

const testimonials = [
  {
    customerName: 'John Lemonseed',
    rating: 5,
    review: 'Lorem ipsum dolor sit amet, consectetur.',
    imgSrc: customer1,
  },
  {
    customerName: 'Jane Dawson',
    rating: 4,
    review: 'Lorem ipsum dolor sit amet, consectetur.',
    imgSrc: customer2,
  },
  {
    customerName: 'Chase White',
    rating: 5,
    review: 'Lorem ipsum dolor sit amet, consectetur.',
    imgSrc: customer3,
  },
  {
    customerName: 'David Park',
    rating: 5,
    review: 'Lorem ipsum dolor sit amet, consectetur.',
    imgSrc: customer4,
  },
];

function Testimonials() {
  return (
    <Box py={8}>
      <Section title="testimonials">
        <Heading size={['3xl']} mb={8} lineHeight={10}>
          Testimonials
        </Heading>

        <SimpleGrid columns={[1, 2, 4]} columnGap={4} rowGap={4}>
          {testimonials.map(testimonial => (
            <TestimonialCard key={`${testimonial.customerName}-${testimonial.rating}`} {...testimonial} />
          ))}
        </SimpleGrid>
      </Section>
    </Box>
  );
}

export default Testimonials;
