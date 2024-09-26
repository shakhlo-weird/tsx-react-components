import React from 'react';

interface ButtonProps {
    text: string;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, variant = 'primary', onClick }) => {
    const baseStyles = 'py-2 px-4 rounded text-white mt-2';
    const variantStyles = variant === 'primary' ? 'bg-primary' : 'bg-secondary';

    return (
        <button className={`${baseStyles} ${variantStyles}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
