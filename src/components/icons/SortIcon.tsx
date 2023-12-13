import { SortDirection } from "@tanstack/react-table";
import { FC, SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  sortType: SortDirection | false
};

export const SortIcon: FC<Props> = (props) => {
  const { sortType, ...rest } = props;
  return (
    <svg
      width="11"
      height="13"
      viewBox="0 0 11 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M0.668223 5.66412H8.36622C8.94089 5.66412 9.24622 4.98413 8.86422 4.55413L5.01556 0.224125C4.95313 0.153662 4.87646 0.0972485 4.79061 0.0586131C4.70476 0.0199778 4.6117 0 4.51756 0C4.42342 0 4.33035 0.0199778 4.2445 0.0586131C4.15865 0.0972485 4.08198 0.153662 4.01956 0.224125L0.169556 4.55413C-0.212444 4.98413 0.0928899 5.66412 0.668223 5.66412Z"
        fill={sortType === "desc" ? "#9E9E9E88" : "#9E9E9E"}
      />
      <path
        d="M8.36558 7L0.667576 7C0.0929092 7 -0.212424 7.68 0.169576 8.11L4.01824 12.44C4.08067 12.5105 4.15734 12.5669 4.24319 12.6055C4.32903 12.6441 4.4221 12.6641 4.51624 12.6641C4.61038 12.6641 4.70345 12.6441 4.7893 12.6055C4.87514 12.5669 4.95181 12.5105 5.01424 12.44L8.86424 8.11C9.24624 7.68 8.94091 7 8.36558 7Z"
        fill={sortType === "asc" ? "#9E9E9E88" : "#9E9E9E"}
      />
    </svg>
  );
};
