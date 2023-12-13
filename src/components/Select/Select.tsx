import { FC, useRef, useState } from "react";
import { MenuState, Menu, MenuItem } from "@szhsin/react-menu";
import { ChevronDownIcon } from "../icons/ChevronDownIcon";

type Props<
  T extends { value: any; label: string } = {
    value: any;
    label: string;
  }
> = {
  onChange(option: T): void;
  options: T[];
  defaultValue: T;
};

const menuClassName = ({ state }: { state: MenuState }) =>
  `box-border z-50 text-sm font-medium bg-light-background dark:bg-dark-background p-1.5 border rounded-md shadow-lg select-none focus:outline-none min-w-[9rem] ${
    state === "opening" && "animate-fadeIn"
  } ${state === "closing" && "animate-fadeOut"}`;

const menuItemClassName = ({
  hover,
  disabled,
}: {
  disabled: boolean;
  hover: boolean;
}) =>
  `rounded-md font-medium px-3 py-1 focus:outline-none cursor-pointer ${
    hover && "bg-light-background dark:bg-dark-background"
  } ${disabled && "text-gray-400"}`;

export const Select: FC<Props> = (props) => {
  const { options, onChange, defaultValue } = props;
  const selectRef = useRef<HTMLSelectElement>(null);

  const [value, setValue] = useState(defaultValue);

  return (
    <Menu
      menuClassName={menuClassName}
      transition={true}
      menuButton={
        <div className="transition-colors duration-300 cursor-pointer text-xs font-medium min-w-[43px] flex items-center justify-between rounded-lg px-2 py-[9px] bg-light-select-bg dark:bg-dark-select-bg hover:bg-light-select-bg-hover hover:dark:bg-dark-select-bg-hover">
          {value?.label}
          <ChevronDownIcon className="fill-light-gray dark:fill-dard-gray ml-[5px]" />
        </div>
      }
    >
      {options.map((option) => {
        return (
          <MenuItem
            className={menuItemClassName}
            key={option.value}
            onClick={() => {
              setValue(option);
              onChange(option);
            }}
          >
            {option.label}
          </MenuItem>
        );
      })}
    </Menu>
  );
};
