import { Box } from '@chakra-ui/react';

import SearchInput from 'components/SearchInput';

// Basic react component
function WorkoutsControlPanel() {
  return (
    <Box bgColor={'gray.200'} py={3} px={8}>
      <SearchInput placeholder="Search workouts..." />
    </Box>
  );
}

export default WorkoutsControlPanel;
