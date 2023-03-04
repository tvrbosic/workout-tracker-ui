import { MenuItem as CMenuItem, MenuItemProps } from '@chakra-ui/react';

// Chakra UI MenuItem component
export default function MenuItem({ children, ...rest }: MenuItemProps) {
  return (
    <CMenuItem
      py={3}
      px={5}
      _hover={{
        bg: 'green.100',
      }}
      transition={'all 200ms linear'}
      {...rest}
    >
      {children}
    </CMenuItem>
  );
}
