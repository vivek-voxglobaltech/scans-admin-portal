import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import { Fields } from '../Fields/RegistrationFields';
import { useDispatch } from 'react-redux';
import { registerUser } from '../app/features/user/userSlice';
import { toast } from 'react-toastify';

const Registration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      dispatch(registerUser(data)).then((res) =>
        toast.success(res.payload.message)
      );
      reset();
    } catch (error) {
      toast.error(error);
      console.log('🚀 ~ file: Registration.js:31 ~ onSubmit ~ error:', error);
      reset();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Registration</h2>
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
