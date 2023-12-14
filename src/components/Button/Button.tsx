import { ButtonHTMLAttributes, FC } from "react";
import { twMerge } from "tailwind-merge";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  leftIcon?: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
};

export const Button: FC<Props> = (props) => {
  const {
    children,
    leftIcon,
    variant = "text",
    className,
    disabled,
    ...rest
  } = props;
  return (
    <button
      {...rest}
      disabled={disabled}
      className={twMerge(
        "h-8 text-xs font-bold py-[8.5px] px-3 flex items-center rounded-lg transition-colors duration-200",
        variant === "primary"
          ? "bg-primary text-white "
          : variant === "secondary"
          ? "bg-light-select-bg dark:bg-dark-select-bg"
          : "p-0 m-0",
        !disabled &&
          (variant === "primary"
            ? "hover:bg-primary-hover"
            : variant === "secondary"
            ? "hover:bg-light-select-bg-hover dark:hover:bg-dark-select-bg-hover"
            : ""),
        className
      )}
    >
      {leftIcon && <div className="mr-2">{leftIcon}</div>}
      {children}
    </button>
  );
};
