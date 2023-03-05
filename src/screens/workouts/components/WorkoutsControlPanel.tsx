import { Box, Flex, Center, Divider } from '@chakra-ui/react';

import SearchInput from 'components/SearchInput';
import DropdownMenu from 'components/DropdownMenu';
import CustomDatePicker from 'components/CustomDatePicker';

// Mocked options data
const options = [
  { value: '0', label: 'All workouts' },
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
  { value: '4', label: 'Option 4' },
  { value: '5', label: 'Option 5' },
];

// Basic react component
function WorkoutsControlPanel() {
  return (
    <Center bgColor={'gray.200'} py={3}>
      <Flex>
        <SearchInput placeholder="Search workouts..." />
        <Divider orientation="vertical" mx={2} />
        <Box>
          <DropdownMenu placeholder="Select type" options={options} width={'100%'} />
        </Box>
        <Divider orientation="vertical" mx={2} />
        <Box>
          <CustomDatePicker />
        </Box>
      </Flex>
    </Center>
  );
}

export default WorkoutsControlPanel;
