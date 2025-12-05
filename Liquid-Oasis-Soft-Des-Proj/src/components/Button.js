import React from 'react';
import clsx from 'clsx';

const Button = ({ children, className, size = 'small', variant = 'primary', ...rest }) => {
  const getClassName = ({ className }) => clsx(
    'text-white text-lg font-bold rounded-xl transition duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-opacity-50',
    className
  );

  const sizes = {
    small: {
      padding: '8px 16px',
    },
    medium: {
      padding: '12px 20px',
    },
    large: {
      width: '100%',
      padding: '12px 16px',
    },
  };

  const variants = {
    primary: {
      backgroundColor: '#FFD700', // marigold color
      focusRingColor: '#FFD700',
    },
    secondary: {
      backgroundColor: '#FF6347', // tomato color
      focusRingColor: '#FF6347',
    },
    dark: {
      backgroundColor: '#000',
      focusRingColor: '#FFF',
    },
  };

  return (
    <button href="/login"
      style={{
        ...sizes[size],
        ...variants[variant],
        marginTop: '30px',
      }}
      className={getClassName({ className })}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
