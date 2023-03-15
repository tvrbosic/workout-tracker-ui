import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Grid, GridItem, Center, Spinner } from '@chakra-ui/react';

import { useApiContext } from 'context/ApiContext';
import SearchInput from 'components/SearchInput';
import DropdownMenu from 'components/DropdownMenu';
import ExerciseList from 'screens/create-workout/components/ExercisesList';

function SearchExercises() {
  const { api } = useApiContext();

  const musclesQuery = useQuery(['muscles'], () => api.getMuscles(), {
    staleTime: Infinity,
  });

  const categoriesQuery = useQuery(['categories'], () => api.getCategories(), {
    staleTime: Infinity,
  });

  const exercisesQuery = useQuery(['exercises'], () => api.getExercises(), {
    staleTime: Infinity,
  });

  useEffect(() => {
    console.log(exercisesQuery.data);
  }, [exercisesQuery.data]);

  return (
    <Grid
      height={'20rem'}
      templateRows={{ base: '1fr 1fr 3fr)' }}
      templateColumns={{ base: 'repeat(2,1fr)' }}
      gap={3}
    >
      <GridItem>
        <SearchInput variant={'filled'} />
      </GridItem>
      <GridItem>
        <DropdownMenu
          placeholder="Select type"
          width={'100%'}
          options={categoriesQuery.data}
          isLoading={!categoriesQuery.isSuccess}
        />
      </GridItem>
      <GridItem>
        <DropdownMenu
          placeholder="Select muscle"
          width={'100%'}
          options={musclesQuery.data}
          isLoading={!musclesQuery.isSuccess}
        />
      </GridItem>
      <GridItem>
        <DropdownMenu
          placeholder="Select type"
          width={'100%'}
          options={categoriesQuery.data}
          isLoading={!categoriesQuery.isSuccess}
        />
      </GridItem>
      <GridItem
        colSpan={2}
        overflow={'auto'}
        color={'gray.100'}
        bgColor={'whiteAlpha.100'}
        borderRadius={'md'}
        sx={{
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            width: '8px',
            background: 'whiteAlpha.200',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'green.500',
            borderRadius: '24px',
          },
        }}
      >
        <ExerciseList
          as={GridItem}
          isLoading={exercisesQuery.isLoading}
          exercises={exercisesQuery.data}
        />
      </GridItem>
    </Grid>
  );
}

export default SearchExercises;
