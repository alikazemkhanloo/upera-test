import { debounce } from "lodash";
import {
  ChangeEventHandler,
  FC,
  InputHTMLAttributes,
  useCallback,
  useState,
} from "react";
import { SearchIcon } from "@/components/icons";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  onSearch(text: string): void;
};
export const SearchInput: FC<Props> = (props) => {
  const { onSearch } = props;
  const [value, setValue] = useState("");

  const handleSearch = useCallback(
    debounce((text: string) => {
      onSearch(text);
    }, 700),
    []
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    handleSearch(e.target.value);
  };
  return (
    <div className="flex h-8 items-center rounded-lg px-[9px] py-2 border border-solid border-light-gray dark:border-dark-gray">
      <div className="pr-1">
        <SearchIcon className="stroke-light-gray dark:stroke-dark-gray" />
      </div>
      <input
        {...props}
        className="flex-1 text-xs font-medium  bg-light-background dark:bg-dark-background focus:outline-none"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
