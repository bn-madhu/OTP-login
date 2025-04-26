import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "outline" | "solid";
  onClick?: () => void;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  onClick,
  className = "",
  ...rest
}) => {
  const variantStyles =
    variant === "outline"
      ? "border-blue-600 bg-transparent text-black hover:bg-gray-200"
      : "border-blue-800 bg-blue-600 text-white hover:bg-blue-800";

  return (
    <button
      onClick={onClick}
      className={`${variantStyles} ${className} cursor-pointer border pl-4 pr-4 pt-2 pb-2 rounded transition-all`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
