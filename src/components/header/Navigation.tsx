import { HStack } from '@chakra-ui/react';

import NavigationMenu from './NavigationMenu';

export default function Navigation() {
  return (
    <HStack
      as={'nav'}
      spacing={6}
      flexGrow={1}
      justifyContent={'center'}
      display={{ base: 'none', md: 'flex' }}
    >
      <NavigationMenu />
    </HStack>
  );
}
