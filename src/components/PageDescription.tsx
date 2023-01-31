import { PropsWithChildren, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Heading, Text } from '@chakra-ui/react';
import Section from 'components/Section';

interface PageDescriptionProps {
  title?: string;
  heading: string;
  description?: ReactNode;
}

function PageDescription({ title, heading, description, children }: PropsWithChildren<PageDescriptionProps>) {
  return (
    <>
      <Helmet>
        <title>{`Little Lemon${title ? ` - ${title}` : ''}`}</title>
      </Helmet>
      <Box backgroundColor="primary.green" color="white">
        <Section minH={270}>
          <Heading color="primary.yellow" size={['3xl']} mb={4} lineHeight={10}>
            {heading}
          </Heading>
          {children ??
            (typeof description === 'string' ? (
              <Text color="white" fontSize="xl" lineHeight={1.25} fontWeight={600}>
                {description}
              </Text>
            ) : (
              description
            ))}
        </Section>
      </Box>
    </>
  );
}

export default PageDescription;
