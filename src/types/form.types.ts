export type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

import type { ChangeEvent } from 'react';

export type FormFieldProps = {
  id: string;
  name: keyof ContactFormState;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
};
