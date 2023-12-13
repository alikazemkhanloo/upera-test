import { FC } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  status?: boolean;
};

export const Status: FC<Props> = (props) => {
  const { status } = props;
  return (
    <div
      className={twMerge(
        "py-2 px-3 rounded-full w-fit",
        status
          ? "bg-success-bg text-success-text"
          : "bg-error-bg text-error-text"
      )}
    >
      {status ? "True" : "False"}
    </div>
  );
};
