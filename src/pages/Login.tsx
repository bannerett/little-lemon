import { Flex } from '@chakra-ui/react';
import LoginForm from 'components/LoginForm';

function Login() {
  return (
    <Flex maxW={900} h="50vh" alignItems="center" justifyContent="center" mx="auto">
      <LoginForm />
    </Flex>
  );
}

export default Login;
