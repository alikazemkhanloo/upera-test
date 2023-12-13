import { ButtonHTMLAttributes, FC } from "react";
import { twMerge } from "tailwind-merge";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  leftIcon: React.ReactNode;
  variant: "primary" | "secondary";
};

export const Button: FC<Props> = (props) => {
  const { children, leftIcon } = props;
  return (
    <button
      {...props}
      className={twMerge(
        "bg-primary h-8 text-xs font-bold py-[8.5px] px-3 flex items-center rounded-lg"
      )}
    >
      <div className="mr-2">{leftIcon}</div>
      {children}
    </button>
  );
};
