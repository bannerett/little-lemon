import React from 'react';
import { FormControl, FormHelperText, FormLabel, Input, InputProps } from '@chakra-ui/react';

type FormInputProps = InputProps & {
  label?: string;
  helperText?: string;
};

function FormInput({ label, helperText, ...rest }: FormInputProps) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input {...rest} />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}

export default FormInput;
