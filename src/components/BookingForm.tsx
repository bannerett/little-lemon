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
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import FormInput from 'components/FormInput';
import FormSelect from 'components/FormSelect';
import { selectUserEmail } from 'store/auth/authSlice';
import { wait } from 'utils/wait';
import { Booking } from 'types/Booking';
import { useAppDispatch } from 'store/store.hooks';
import { reserveTable, reserveUnregisteredUserTable } from 'store/reservations/reservationsSlice';

dayjs.extend(localizedFormat);
dayjs.extend(isBetween);

type Form = Omit<Booking, 'id'>;

const validationSchema = Yup.object<Record<keyof Form, Yup.AnySchema>>().shape({
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

        if (date.isBefore(dayjs())) return false;

        if (date.day() > 4 && date.day() < 7) {
          return date.hour() >= 10 && date.hour() <= 22;
        }

        return date.hour() >= 10 && date.hour() <= 20;
      }
    ),
  guests: Yup.number().required('Persons is required').min(1, 'Provide at least one person'),
  occasion: Yup.string().required('Occasion is required'),
  contactType: Yup.string().required('Contact type is required'),
  contact: Yup.string()
    .required('Contact is required')
    .test('contactEmailTest', 'Incorrect email. Ex: myawesome@mail.com', function (contact) {
      if (!contact) return false;

      return this.parent.contactType === 'email' ? /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(contact) : true;
    })
    .test('contactPhoneTest', 'Incorrect phone number. Ex: 123 456 7890', function (contact) {
      if (!contact) return false;

      return this.parent.contactType === 'phone' ? /^[0-9]{3}[0-9]{3}[0-9]{4}$/.test(contact) : true;
    }),
  additionalInfo: Yup.string(),
});

const timeOptions = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const occasionOptions = ['Birthday', 'Anniversary'];

function BookingForm() {
  const dispatch = useAppDispatch();
  const userEmail = useSelector(selectUserEmail);
  const toast = useToast();

  const { getFieldProps, setFieldValue, handleSubmit, resetForm, values, touched, errors, isSubmitting, isValid } =
    useFormik<Form>({
      initialValues: {
        username: '',
        date: '',
        time: '',
        guests: 1,
        occasion: '',
        contactType: 'email',
        contact: '',
        additionalInfo: '',
      },
      validationSchema,
      onSubmit: async form => {
        try {
          await wait(1000);

          if (userEmail) dispatch(reserveTable({ ...form, id: Date.now(), userId: userEmail }));
          else dispatch(reserveUnregisteredUserTable({ ...form, id: Date.now(), userId: form.contact }));

          resetForm();

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
    if (userEmail && values.contactType === 'email' && !touched.contact) {
      void setFieldValue('contact', userEmail);
    }
  }, [setFieldValue, touched.contact, userEmail, values.contactType]);

  const handleContactTypeChange = async (contactType: string) => {
    await setFieldValue('contactType', contactType, true);
    await setFieldValue('contact', '', false);
  };

  const getProgress = () => {
    const partWidthPercent = 100 / (Object.keys(values).length - 2);

    return Number(
      Object.entries(values)
        .filter(([k]) => k !== 'contactType' && k !== 'additionalInfo')
        .reduce((acc, [key, value]) => {
          return value && !errors[key as keyof typeof errors] ? acc + partWidthPercent : acc;
        }, 0)
        .toPrecision(3)
    );
  };

  const progress = getProgress();

  return (
    <form onSubmit={handleSubmit}>
      <Card borderRadius={16} border="1px solid rgba(0,0,0,0.125)" overflow="hidden" maxW={600} mx="auto">
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
            placeholder="Ex: John Lemonseed"
            isRequired
            isInvalid={touched.username && !!errors.username}
            errorMessage={errors.username}
            {...getFieldProps('username')}
          />
          <FormInput
            type="date"
            label="Choose date"
            isRequired
            isInvalid={touched.date && !!errors.date}
            errorMessage={errors.date}
            {...getFieldProps('date')}
          />
          <FormSelect
            placeholder="Choose time"
            label="Choose time"
            options={timeOptions}
            isRequired
            isInvalid={touched.time && !!errors.time}
            isDisabled={!values.date}
            errorMessage={errors.time}
            {...getFieldProps('time')}
          />
          <FormInput
            type="number"
            label="Number of guests"
            isRequired
            isInvalid={touched.guests && !!errors.guests}
            errorMessage={errors.guests}
            {...getFieldProps('guests')}
          />
          <FormSelect
            label="Occasion"
            placeholder="Occasion"
            options={occasionOptions}
            isRequired
            isInvalid={touched.occasion && !!errors.occasion}
            errorMessage={errors.occasion}
            {...getFieldProps('occasion')}
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
          <Text mb={1.5} fontSize="md">
            Additional info
          </Text>
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
            Make Your reservation
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

export default BookingForm;
