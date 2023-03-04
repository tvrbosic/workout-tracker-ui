import { Flex, IconButton, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface ISearchInputProps {
  placeholder?: string;
}

// Basic react component
function SearchInput({ placeholder }: ISearchInputProps = {}) {
  return (
    <Flex>
      <IconButton
        aria-label="Search icon"
        borderTopRightRadius={0}
        borderBottomRightRadius={0}
        color={'gray.800'}
        bgColor={'green.300'}
        border={'1px solid'}
        borderColor={'gray.400'}
        borderRight={0}
        transition={'all 200ms linear'}
        _hover={{
          bgColor: 'green.400',
        }}
        icon={<SearchIcon borderColor={'gray.400'} />}
      />
      <Input
        placeholder={placeholder}
        type={'text'}
        color={'blue.800'}
        borderColor={'gray.400'}
        borderTopLeftRadius={0}
        borderBottomLeftRadius={0}
        transition={'all 200ms linear'}
        _focus={{
          borderColor: 'green.400',
          boxShadow: 'none',
          bgColor: 'whiteAlpha.200',
        }}
        _hover={{
          borderColor: 'gray.500',
        }}
      />
    </Flex>
  );
}

export default SearchInput;
