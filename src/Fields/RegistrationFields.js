export const Fields = [
  {
    fieldName: 'firstname',
    fieldType: 'text',
    validationObj: { required: 'Firstname is required' },
  },
  {
    fieldName: 'lastname',
    fieldType: 'text',
    validationObj: { required: 'Lastname is required' },
  },
  {
    fieldName: 'email',
    fieldType: 'email',
    validationObj: {
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'invalid email address',
      },
    },
  },
  {
    fieldName: 'password',
    fieldType: 'password',
    validationObj: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must be at least 8 characters long',
      },
    },
  },
  {
    fieldName: 'contact',
    fieldType: 'text',
    validationObj: { required: 'Contact is required' },
  },
];
