import { BaseSyntheticEvent, useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Card, CardBody, CardFooter, CardHeader, useToast } from '@chakra-ui/react';
import { useAppDispatch } from 'store/store';
import { selectAuth, setAuth } from 'store/auth/authSlice';
import FormInput from './FormInput';

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useToast();
  const auth = useSelector(selectAuth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const register = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setLoading(true);

    timeoutRef.current = setTimeout(() => {
      setLoading(false);
      dispatch(setAuth({ id: Date.now().toString(), email, password }));
      toast({
        status: 'success',
        title: 'Login Success',
        description: 'Login Success',
        onCloseComplete: () => {
          navigate('/');
        },
      });
    }, 2000);
  }, [dispatch, email, navigate, password, toast]);

  const handleChangeEmail = useCallback((e: BaseSyntheticEvent) => {
    setEmail(e.target.value);
  }, []);

  const handleChangePassword = useCallback((e: BaseSyntheticEvent) => {
    setPassword(e.target.value);
  }, []);

  return (
    <Card as="form" w={['100%', 500]}>
      <CardHeader>Login or Register?</CardHeader>
      <CardBody>
        <FormInput isRequired type="email" label="Email" value={email} onChange={handleChangeEmail} />
        <FormInput isRequired type="password" label="Password" value={password} onChange={handleChangePassword} />
      </CardBody>
      <CardFooter>
        <Button isDisabled={auth.user.id} isLoading={loading} onClick={register}>
          Register
        </Button>
      </CardFooter>
    </Card>
  );
}

export default LoginForm;
