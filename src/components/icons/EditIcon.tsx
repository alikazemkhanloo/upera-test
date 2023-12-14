import { FC, SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export const EditIcon: FC<Props> = (props) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.625 4H4.625C4.09457 4 3.58586 4.21071 3.21079 4.58579C2.83571 4.96086 2.625 5.46957 2.625 6V20C2.625 20.5304 2.83571 21.0391 3.21079 21.4142C3.58586 21.7893 4.09457 22 4.625 22H18.625C19.1554 22 19.6641 21.7893 20.0392 21.4142C20.4143 21.0391 20.625 20.5304 20.625 20V13"
        stroke="#624DE3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.125 2.50001C19.5228 2.10219 20.0624 1.87869 20.625 1.87869C21.1876 1.87869 21.7272 2.10219 22.125 2.50001C22.5228 2.89784 22.7463 3.4374 22.7463 4.00001C22.7463 4.56262 22.5228 5.10219 22.125 5.50001L12.625 15L8.625 16L9.625 12L19.125 2.50001Z"
        stroke="#624DE3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
