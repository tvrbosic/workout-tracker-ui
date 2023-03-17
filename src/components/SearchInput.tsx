import { InputGroup, Input, InputLeftAddon, InputGroupProps } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import { debounce } from 'utils/utility';

interface ISearchInputProps extends InputGroupProps {
  placeholder?: string;
  handleChange?: (value: string) => void;
}

function SearchInput({ placeholder, handleChange, ...rest }: ISearchInputProps = {}) {
  // Debounce and handle value change in the input
  const inputChangeHandler = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    if (handleChange) {
      handleChange(e.target.value);
    }
  }, 600);

  return (
    <InputGroup {...rest}>
      <InputLeftAddon
        aria-label="Search icon"
        borderRight={0}
        borderTopRightRadius={0}
        borderBottomRightRadius={0}
        children={<SearchIcon />}
      />
      <Input
        type="text"
        placeholder={placeholder}
        borderTopLeftRadius={0}
        borderBottomLeftRadius={0}
        onChange={inputChangeHandler}
      />
    </InputGroup>
  );
}

export default SearchInput;
