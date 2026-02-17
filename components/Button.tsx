import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ children, to, variant = 'primary', className = '', onClick, type = 'button' }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 uppercase tracking-widest text-xs font-semibold transition-all duration-300 ease-out";
  
  const variants = {
    primary: "bg-gold-500 text-charcoal-900 hover:bg-ivory-100",
    secondary: "bg-charcoal-700 text-ivory-100 hover:bg-gold-500 hover:text-charcoal-900",
    outline: "border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-charcoal-900",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;