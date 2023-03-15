import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Grid, GridItem, Box } from '@chakra-ui/react';

import { useApiContext } from 'context/ApiContext';
import { IExercise } from 'ts/definitions';
import SearchInput from 'components/SearchInput';
import DropdownMenu from 'components/DropdownMenu';
import ExerciseListItem from 'screens/create-workout/components/ExerciseListItem';

function SearchExercises() {
  const { api } = useApiContext();

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
        <SearchInput />
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
          placeholder="Select type"
          width={'100%'}
          options={categoriesQuery.data}
          isLoading={!categoriesQuery.isSuccess}
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
        {!exercisesQuery.isLoading &&
          exercisesQuery.data.map((exercise: IExercise) => (
            <ExerciseListItem key={exercise.id} exercise={exercise} />
          ))}
      </GridItem>
    </Grid>
  );
}

export default SearchExercises;
