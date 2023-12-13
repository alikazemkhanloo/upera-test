import { debounce } from "lodash";
import {
  ChangeEventHandler,
  FC,
  InputHTMLAttributes,
  useCallback,
  useState,
} from "react";

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
    <div>
      <input {...props} value={value} onChange={handleChange} />;
    </div>
  );
};
