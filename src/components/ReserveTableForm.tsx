import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import FormInput from 'components/FormInput';
import { selectAuth } from 'store/auth/authSlice';
import { wait } from 'utils/wait';

dayjs.extend(localizedFormat);
dayjs.extend(isBetween);

interface Booking {
  username: string;
  date: string;
  time: string;
  persons: number;
  contactType: 'email' | 'phone';
  contact: string;
  additionalInfo?: string;
}

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Name is required').min(2, 'Too Short'),
  date: Yup.date().required('Date is required'),
  time: Yup.string()
    .required('Time is required')
    .min(2, 'Too Short')
    .test(
      'timeTest',
      'Time should be between: Mon - Tue, Sun: 10:00am - 20:00pm, Fri-Sat: 10:00am - 10:00pm',
      function (time) {
        const { date: selectedDate } = this.parent;
        if (!time) return false;

        const [hh, mm] = time.split(':');
        const date = dayjs(selectedDate).set('hours', Number(hh)).set('minutes', Number(mm));

        if (date.day() > 4 && date.day() < 7) {
          return date.hour() >= 10 && date.hour() <= 22;
        }

        return date.hour() >= 10 && date.hour() <= 20;
      }
    ),
  persons: Yup.number().required('Persons is required').min(1, 'Provide at least one person'),
  contactType: Yup.string().required('Contact type is required'),
  contact: Yup.string()
    .required('Contact is required')
    .test('contactEmailTest', 'Incorrect email. Ex: myawesome@mail.com', function (contact) {
      if (!contact) return false;

      return this.parent.contactType === 'email' ? /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(contact) : true;
    })
    .test('contactPhoneTest', 'Incorrect phone number. Ex: 123-456-7890', function (contact) {
      if (!contact) return false;

      return this.parent.contactType === 'phone' ? /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(contact) : true;
    }),
  additionalInfo: Yup.string(),
});

function ReserveTableForm() {
  const { user } = useSelector(selectAuth);
  const toast = useToast();

  const { getFieldProps, setFieldValue, handleSubmit, values, touched, errors, isSubmitting, isValid } =
    useFormik<Booking>({
      initialValues: {
        username: '',
        date: '',
        time: '',
        persons: 1,
        contactType: 'email',
        contact: '',
        additionalInfo: '',
      },
      validationSchema,
      onSubmit: async form => {
        try {
          await wait(3000);

          const date = dayjs(form.date.concat(form.time));
          toast({
            status: 'success',
            title: `Thank you for booking, ${form.username}!`,
            description: `Waiting for you at "Little Lemon" on ${date.format('LLLL')}`,
            duration: 8000,
          });
        } catch (error) {
          toast({
            status: 'error',
            description: (error as Record<string, any>).message,
            title: 'Unable to place your booking',
          });
        }
      },
    });

  useEffect(() => {
    if (user.email && values.contactType === 'email' && !touched.contact) {
      void setFieldValue('contact', user.email);
    }
  }, [setFieldValue, touched.contact, user, values.contactType]);

  const handleContactTypeChange = async (contactType: string) => {
    await setFieldValue('contactType', contactType, true);
    await setFieldValue('contact', '', false);
  };

  const getProgress = () => {
    console.log('call');
    const partWidthPercent = 100 / (Object.keys(values).length - 2);

    return Object.entries(values)
      .filter(([k]) => k !== 'contactType' && k !== 'additionalInfo')
      .reduce((acc, [key, value]) => {
        return value && !errors[key as keyof typeof errors] ? acc + partWidthPercent : acc;
      }, 0);
  };

  const progress = getProgress();

  return (
    <form onSubmit={handleSubmit}>
      <Card borderRadius={16} border="1px solid rgba(0,0,0,0.125)" overflow="hidden">
        <Box
          sx={{
            position: 'relative',
            background: 'primary.green',
            height: 4,
            width: `${progress}%`,
            transition: 'width 250ms ease-in-out',
            borderRightRadius: progress !== 100 ? 12 : 0,
          }}
        />
        <CardBody>
          <FormInput
            type="text"
            label="Full name"
            placeholder="Ex: John Smith"
            isRequired
            isInvalid={touched.username && !!errors.username}
            errorMessage={errors.username}
            {...getFieldProps('username')}
          />
          <FormInput
            type="date"
            label="Date"
            isRequired
            isInvalid={touched.date && !!errors.date}
            errorMessage={errors.date}
            {...getFieldProps('date')}
          />
          <FormInput
            type="time"
            label="Time"
            min="10:00"
            max="23:00"
            placeholder="Mon - Tue, Sun: 10:00am - 20:00pm, Fri-Sat: 10:00am - 10:00pm"
            isRequired
            isDisabled={!values.date}
            isInvalid={touched.time && !!errors.time}
            errorMessage={errors.time}
            {...getFieldProps('time')}
          />
          <FormInput
            type="number"
            label="Persons"
            isRequired
            isInvalid={touched.persons && !!errors.persons}
            errorMessage={errors.persons}
            {...getFieldProps('persons')}
          />
          <RadioGroup value={values.contactType} onChange={handleContactTypeChange}>
            <Stack direction="row">
              <Radio value="email">Email</Radio>
              <Radio value="phone">Phone</Radio>
            </Stack>
          </RadioGroup>
          <FormInput
            type={values.contactType === 'email' ? 'email' : 'tel'}
            label={values.contactType === 'email' ? 'Email' : 'Telephone'}
            isRequired
            isInvalid={!!errors.contact && (touched.contact ?? !!values.contact)}
            errorMessage={errors.contact}
            {...getFieldProps('contact')}
          />
          <Textarea fontSize={18} {...getFieldProps('additionalInfo')} />
        </CardBody>
        <CardFooter>
          <Button
            type="submit"
            sx={{
              px: 10,
              py: 2.5,
              fontSize: 18,
              lineHeight: 1.5,
              backgroundColor: 'primary.yellow',
              color: 'primary.green',
              '&:hover': { backgroundColor: 'primary.green', color: 'primary.yellow' },
            }}
            isDisabled={!isValid}
            isLoading={isSubmitting}
          >
            Place Order
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

export default ReserveTableForm;
