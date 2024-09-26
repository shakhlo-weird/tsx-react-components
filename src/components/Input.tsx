import React, { useState } from 'react';

interface InputProps {
    id: string;
    type: string;
    placeholder?: string;
    labelText?: string;
    hasError?: boolean;
}

const Input = ({ id, type, placeholder, labelText, hasError = false }: InputProps) => {
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className="relative mt-4">
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className={`peer w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    hasError
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                }`}
            />

            {labelText && (
                <label
                    htmlFor={id}
                    className={`
                        absolute top-0 left-3 -translate-y-1/2 
                        bg-white px-1 text-sm 
                        text-gray-500 
                        transition-all
                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-y-0 
                        peer-focus:top-0 peer-focus:left-3 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:-translate-y-1/2
                        ${hasError ? 'peer-focus:text-red-500' : ''}
                    `}
                >
                    {labelText}
                </label>
            )}

            {type === 'email' && (
                <p className={`mt-2 text-sm ${hasError ? 'text-red-600 visible' : 'invisible'}`}>
                    Please provide a valid email address.
                </p>
            )}
        </div>
    );
};

export default Input;
