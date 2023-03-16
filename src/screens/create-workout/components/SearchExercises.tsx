import { useReducer } from 'react';
import { useQuery } from 'react-query';
import { Grid, GridItem } from '@chakra-ui/react';

import { useApiContext } from 'context/ApiContext';
import { IExerciseFilters } from 'ts/definitions';
import SearchInput from 'components/SearchInput';
import DropdownMenu from 'components/DropdownMenu';
import ExerciseList from 'screens/create-workout/components/ExercisesList';

export enum ExerciseFilterActionTypes {
  UPDATE_CATEGORY = 'CATEGORY',
  UPDATE_MUSCLE = 'MUSCLE',
  UPDATE_DIFFICULTY = 'DIFFICULTY',
}

interface IExerciseFilterAction {
  type: ExerciseFilterActionTypes;
  payload?: any;
}

const initialState: IExerciseFilters = {
  category: null,
  muscle: null,
  difficulty: null,
};

function exerciseFilterReducer(state: IExerciseFilters, action: IExerciseFilterAction) {
  switch (action.type) {
    case ExerciseFilterActionTypes.UPDATE_CATEGORY: {
      return { ...state, category: action.payload };
    }
    case ExerciseFilterActionTypes.UPDATE_MUSCLE: {
      return { ...state, muscle: action.payload };
    }
    case ExerciseFilterActionTypes.UPDATE_DIFFICULTY: {
      return { ...state, difficulty: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function SearchExercises() {
  const { api } = useApiContext();
  const [exerciseFilters, dispatch] = useReducer(exerciseFilterReducer, initialState);

  const musclesQuery = useQuery(['muscles'], () => api.getMuscles(), {
    staleTime: Infinity,
  });

  const categoriesQuery = useQuery(['categories'], () => api.getCategories(), {
    staleTime: Infinity,
  });

  const difficultiesQuery = useQuery(['difficulties'], () => api.getDifficulties(), {
    staleTime: Infinity,
  });

  const exercisesQuery = useQuery(['exercises'], () => api.getExercises(exerciseFilters), {
    staleTime: Infinity,
  });

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
          placeholder="Filter by type"
          width={'100%'}
          options={categoriesQuery.data}
          isLoading={!categoriesQuery.isSuccess}
        />
      </GridItem>
      <GridItem>
        <DropdownMenu
          placeholder="Filter by muscle"
          width={'100%'}
          options={musclesQuery.data}
          isLoading={!musclesQuery.isSuccess}
        />
      </GridItem>
      <GridItem>
        <DropdownMenu
          placeholder="Filter by difficulty"
          width={'100%'}
          options={difficultiesQuery.data}
          isLoading={!difficultiesQuery.isSuccess}
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
