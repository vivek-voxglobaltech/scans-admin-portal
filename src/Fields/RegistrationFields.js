export const Fields = [
  {
    fieldName: 'email',
    fieldType: 'email',
    validationObj: {
      required: 'Email is required',
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: 'Invalid email address',
      },
    },
  },
  {
    fieldName: 'username',
    fieldType: 'text',
    validationObj: { required: 'Username is required' },
  },
];
