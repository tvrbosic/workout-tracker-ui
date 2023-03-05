import { InputGroup, Input, InputLeftAddon, InputGroupProps } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface ISearchInputProps extends InputGroupProps {
  placeholder?: string;
}

function SearchInput({ placeholder, ...rest }: ISearchInputProps = {}) {
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
      />
    </InputGroup>
  );
}

export default SearchInput;
