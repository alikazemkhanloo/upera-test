import { FC, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;
export const Input: FC<Props> = (props) => {
  return <input {...props} />;
};
