import { Box, Flex, Divider, Button } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import routes from 'router/routes';
import { useApiContext } from 'context/ApiContext';
import { IDropdownOption } from 'ts/definitions';
import SearchInput from 'components/SearchInput';
import DropdownMenu from 'components/DropdownMenu';
import CustomDatePicker from 'components/CustomDatePicker';

// Basic react component
function WorkoutsControlPanel() {
  const { api } = useApiContext();
  const navigate = useNavigate();

  const categoriesQuery = useQuery(['categories'], () => api.getCategories(), {
    staleTime: Infinity,
  });

  const categoryChangeHandler = (category: IDropdownOption) => {
    // TODO: implement
    console.log('categoryChangeHandler');
  };

  return (
    <Flex bgColor={'gray.200'} px={8} py={3} justifyContent={'space-between'}>
      <Flex>
        <SearchInput placeholder="Search workouts..." />
        <Divider orientation="vertical" mx={2} />
        <Box>
          <DropdownMenu
            placeholder="Select type"
            options={categoriesQuery.data}
            isLoading={!categoriesQuery.isSuccess}
            onValueChange={categoryChangeHandler}
          />
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
