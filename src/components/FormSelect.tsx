import React, { ChangeEvent } from 'react';
import { FormControl, FormErrorMessage, FormLabel, InputProps, Select } from '@chakra-ui/react';

type FormSelectProps = Pick<InputProps, 'size' | 'isRequired' | 'isInvalid' | 'isDisabled' | 'id' | 'placeholder'> & {
  options: string[];
  label?: string;
  errorMessage?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};
function FormSelect({ options, label, size, isRequired, isInvalid, errorMessage, ...props }: FormSelectProps) {
  return (
    <FormControl
      my={5}
      isRequired={isRequired}
      isInvalid={isInvalid}
      aria-label={label}
      aria-controls={props.id}
      aria-invalid={isInvalid}
      aria-required={isRequired}
      aria-errormessage={errorMessage}
    >
      <FormLabel htmlFor={props.id}>{label}</FormLabel>
      <Select size={size ?? 'lg'} maxWidth="100%" borderRadius={12} {...props}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}

export default FormSelect;
