
'use client'; 
import { useState } from "react";


const MultipleValueTextInput = ({
  label,
  name,
  placeholder,
  values = [],
  onItemAdded,
  onItemDeleted,
  disabled = false,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [currentValues, setCurrentValues] = useState(values);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const value = inputValue.trim();

      if (value && !currentValues.includes(value)) {
        const updatedValues = [...currentValues, value];
        setCurrentValues(updatedValues);
        setInputValue('');
        onItemAdded(value, updatedValues);
      }
    }
  };

  const handleRemoveItem = (item) => {
    const updatedValues = currentValues.filter((value) => value !== item);
    setCurrentValues(updatedValues);
    onItemDeleted(item, updatedValues);
  };

  return (
    <div className="mb-4">
      <label htmlFor={name} className="mb-3 block text-lg font-bold text-black dark:text-white">
        {label}
      </label>

      <div className="flex flex-wrap ">
        {currentValues.map((item, index) => (
          <span
            key={index}
            className="bg-gray-300/45 text-sm text-gray-500 dark:text-white px-3 py-1 rounded-full mr-2 mb-2 flex items-center"
          >
            {item}
            <button
              type="button"
              onClick={() => handleRemoveItem(item)}
              className="ml-2 text-red-600 shadow-6"
            >
              x
            </button>
          </span>
        ))}
      </div>

      <input
        type="text"
        name={name}
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
      />
    </div>
  );
};

export default MultipleValueTextInput;
