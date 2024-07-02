import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import { Fields } from '../Fields/LoginFields';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {Fields &&
            Fields.map((field) => (
              <Input
                key={field.fieldName}
                fieldName={field.fieldName}
                fieldType={field.fieldType}
                validation={field.validationObj}
                register={register}
                errors={errors}
              />
            ))}
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
