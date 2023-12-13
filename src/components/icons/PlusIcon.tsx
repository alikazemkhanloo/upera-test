import { FC, SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export const PlusIcon: FC<Props> = (props) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.5 0.75C6.5 0.551088 6.42098 0.360322 6.28033 0.21967C6.13968 0.0790175 5.94891 0 5.75 0C5.55109 0 5.36032 0.0790175 5.21967 0.21967C5.07902 0.360322 5 0.551088 5 0.75V5H0.75C0.551088 5 0.360322 5.07902 0.21967 5.21967C0.0790175 5.36032 0 5.55109 0 5.75C0 5.94891 0.0790175 6.13968 0.21967 6.28033C0.360322 6.42098 0.551088 6.5 0.75 6.5H5V10.75C5 10.9489 5.07902 11.1397 5.21967 11.2803C5.36032 11.421 5.55109 11.5 5.75 11.5C5.94891 11.5 6.13968 11.421 6.28033 11.2803C6.42098 11.1397 6.5 10.9489 6.5 10.75V6.5H10.75C10.9489 6.5 11.1397 6.42098 11.2803 6.28033C11.421 6.13968 11.5 5.94891 11.5 5.75C11.5 5.55109 11.421 5.36032 11.2803 5.21967C11.1397 5.07902 10.9489 5 10.75 5H6.5V0.75Z"
        fill="white"
      />
    </svg>
  );
};
