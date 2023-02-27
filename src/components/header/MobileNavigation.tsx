import { Box, Stack } from '@chakra-ui/react';

import NavigationMenu from './NavigationMenu';

export default function MobileNavigation() {
  return (
    <Box pb={4} display={{ md: 'none' }}>
      <Stack as={'nav'} spacing={4}>
        <NavigationMenu />
      </Stack>
    </Box>
  );
}
