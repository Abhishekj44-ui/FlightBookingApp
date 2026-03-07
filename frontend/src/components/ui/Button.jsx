import React from 'react'

const Button = ({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}) => {
    const baseStyles = "rounded-md font-medium transition-all duration-200 focus:outline-none";
    const variants = {
        primary: "bg-primary text-text-primary hover:opacity-90",
        secondary: "bg-card text-black hover:opacity-90 hover:bg-gray-800",
    };
    const sizes = {
        sm: "px-4 py-2 text-sm ",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg "
    }
  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
        {children}
    </button>
  )
}

export default Button
