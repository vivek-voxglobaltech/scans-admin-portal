import React from 'react';

function Input({
  fieldName,
  fieldType,
  register,
  errors,
  validation,
  onChange,
}) {
  return (
    <div className="space-y-1">
      <label
        htmlFor={fieldName}
        className="block text-sm font-medium text-gray-700 capitalize"
      >
        {fieldName}
      </label>
      <input
        type={fieldType}
        id={fieldName}
        name={fieldName}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        {...register(fieldName, {
          onChange: (e) => onChange && onChange(e),
          ...validation,
        })}
      />
      {errors[fieldName] && errors[fieldName].message}
    </div>
  );
}

export default Input;
