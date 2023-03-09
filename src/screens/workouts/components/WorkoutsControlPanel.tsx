import { Box, Flex, Divider, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import routes from 'router/routes';
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
  const navigate = useNavigate();

  return (
    <Flex bgColor={'gray.200'} px={8} py={3} justifyContent={'space-between'}>
      <Flex>
        <SearchInput placeholder="Search workouts..." />
        <Divider orientation="vertical" mx={2} />
        <Box>
          <DropdownMenu placeholder="Select type" options={options} width={'100%'} />
        </Box>
        <Divider orientation="vertical" mx={2} />
        <Box minWidth={'118px'}>
          <CustomDatePicker />
        </Box>
      </Flex>
      <Box>
        <Button variant={'outline'} onClick={() => navigate(routes.createWorkouts.path)}>
          New workout
        </Button>
      </Box>
    </Flex>
  );
}

export default WorkoutsControlPanel;
