import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren;
export const Layout: FC<Props> = (props) => {
  const { children } = props;
  return <div className="mx-4">
    {children}
  </div>;
};
