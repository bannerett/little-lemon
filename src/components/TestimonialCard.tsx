import React from 'react';
import { Avatar, Card, CardBody, HStack, Image, Text, VStack } from '@chakra-ui/react';
import star from 'assets/img/star.jpg';

interface TestimonialCardProps {
  rating: number;
  customerName: string;
  review: string;
  imgSrc: string;
}

function TestimonialCard({ rating, customerName, review, imgSrc }: TestimonialCardProps) {
  const renderRating = (rtg: number) => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return new Array(rtg).fill(star).map((imgSrc, i) => <Image key={`${imgSrc}-${i}`} src={star} w={4} h={4} />);
  };

  return (
    <Card>
      <CardBody>
        <VStack alignItems="flex-start" justifyContent="center">
          <HStack>{renderRating(rating)}</HStack>
          <HStack py={2}>
            <Avatar src={imgSrc} />
            <Text>{customerName}</Text>
          </HStack>
          <Text fontSize="sm">{review}</Text>
        </VStack>
      </CardBody>
    </Card>
  );
}

export default TestimonialCard;
