import React from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
    name: string;
    type: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextField({
    name,
    type,
    placeholder,
    icon,
    value,
    onChange,
}: TextFieldProps) {
    return (
        <div className="flex border border-medium-slate rounded-md overflow-hidden">
            {icon && (
                <div className="flex flex-none p-3 lg:p-4 items-center justify-center border-medium-slate border-r">
                    {icon}
                </div>
            )}
            <input
                type={type}
                name={name}
                className="text-xs lg:text-sm w-full p-3 lg:p-4 focus:outline-none"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
