import { ButtonHTMLAttributes, FC } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = (props) => {
  return <button {...props} />;
};
