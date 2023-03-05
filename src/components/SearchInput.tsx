import { Flex, IconButton, Input, HTMLChakraProps } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface ISearchInputProps extends HTMLChakraProps<'div'> {
  placeholder?: string;
}

// Basic react component
function SearchInput({ placeholder, ...rest }: ISearchInputProps = {}) {
  return (
    <Flex {...rest}>
      <IconButton
        aria-label="Search icon"
        borderTopRightRadius={0}
        borderBottomRightRadius={0}
        color={'gray.800'}
        bgColor={'green.300'}
        border={'1px solid'}
        borderColor={'green.500'}
        borderRight={0}
        transition={'all 200ms linear'}
        _hover={{
          bgColor: 'green.400',
        }}
        icon={<SearchIcon borderColor={'green.500'} />}
      />
      <Input
        placeholder={placeholder}
        type={'text'}
        color={'gray.800'}
        borderColor={'green.500'}
        borderTopLeftRadius={0}
        borderBottomLeftRadius={0}
        transition={'all 200ms linear'}
        _focus={{
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
