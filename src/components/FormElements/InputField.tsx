import React from 'react';

const InputField = ({ label, type = 'text', placeholder, value, onChange, disabled = false }) => {
  return (
    <div className="">
      <label className="mb-3 block text-lg font-bold text-black dark:text-white">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
      />
    </div>
  );
};

export default InputField;
