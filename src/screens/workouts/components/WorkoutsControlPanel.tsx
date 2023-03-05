import { Box, Flex, Text, Divider } from '@chakra-ui/react';

import SearchInput from 'components/SearchInput';
import SelectDropdown from 'components/SelectDropdown';

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
    <Box bgColor={'gray.200'} py={3} px={8}>
      <Flex>
        <SearchInput placeholder="Search workouts..." flexGrow={1} />
        <Divider orientation="vertical" mx={2} />
        <SelectDropdown placeholder="Select type" options={options} width={'20%'} />
        <Divider orientation="vertical" mx={2} />
        <Text width={'25%'}>TODO: Datepicker </Text>
      </Flex>
    </Box>
  );
}

export default WorkoutsControlPanel;
