import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Card, CardBody, CardFooter, useToast } from '@chakra-ui/react';
import FormInput from 'components/FormInput';
import { useAppDispatch } from 'store/store';
import { authLogin } from 'store/auth/authSlice';
import { wait } from 'utils/wait';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

interface Login {
  email: string;
  password: string;
}

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useToast();

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { getFieldProps, handleSubmit, touched, errors, isSubmitting, isValid } = useFormik<Login>({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: async form => {
      try {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        await wait(2000).then(() => {
          dispatch(authLogin({ ...form, id: form.email }));
          toast({
            status: 'success',
            title: 'Login Success',
            description: 'Login Success',
            duration: 1000,
            isClosable: true,
            onCloseComplete: () => {
              navigate('/');
            },
          });
        });
      } catch (e) {
        toast({
          status: 'error',
          title: 'Login Error',
          description: (e as Record<string, any>).message,
        });
      }
    },
  });

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', margin: '0 16px' }}>
      <Card w={['100%', 500]} shadow="lg" border="1px solid rgba(0,0,0,0.125)" borderRadius={16} mx="auto">
        <CardBody pb={0}>
          <FormInput
            isRequired
            isInvalid={!!errors.email && touched.email}
            type="email"
            label="Email"
            errorMessage={errors.email}
            {...getFieldProps('email')}
          />
          <FormInput
            isRequired
            isInvalid={!!errors.password && touched.password}
            type="password"
            label="Password"
            errorMessage={errors.password}
            {...getFieldProps('password')}
          />
        </CardBody>
        <CardFooter>
          <Button
            type="submit"
            backgroundColor="primary.yellow"
            color="primary.green"
            isDisabled={!isValid}
            isLoading={isSubmitting}
            sx={{ px: 10, py: 2.5, fontSize: 18, lineHeight: 1.5 }}
            _hover={{ color: 'primary.yellow', backgroundColor: 'primary.green' }}
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

export default LoginForm;
