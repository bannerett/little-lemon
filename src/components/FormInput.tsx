import React from 'react';
import { FormControl, FormErrorMessage, FormLabel, Input, InputProps } from '@chakra-ui/react';

type FormInputProps = InputProps & { type?: string; label?: string; errorMessage?: string };

function FormInput({ label, type, size, isRequired, isInvalid, errorMessage, ...props }: FormInputProps) {
  return (
    <FormControl
      my={4}
      isRequired={isRequired}
      isInvalid={isInvalid}
      aria-label={label}
      aria-controls={props.id}
      aria-invalid={isInvalid}
      aria-required={isRequired}
      aria-errormessage={errorMessage}
    >
      <FormLabel>{label}</FormLabel>
      <Input type={type ?? 'text'} size={size ?? 'lg'} maxWidth="100%" {...props} />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}

export default FormInput;
