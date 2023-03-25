import { useReducer, useCallback } from 'react';
import { useQuery } from 'react-query';
import { Grid, GridItem } from '@chakra-ui/react';

import { useApiContext } from 'context/ApiContext';
import { IExerciseFilters, IBasicEntity } from 'ts/definitions';
import SearchInput from 'components/SearchInput';
import DropdownMenu from 'components/DropdownMenu';
import ExerciseList from 'screens/create-workout/components/ExercisesList';

export enum ExerciseFilterActionTypes {
  NAME_FILTER = 'NAME',
  CATEGORY_FILTER = 'CATEGORY',
  MUSCLE_FILTER = 'MUSCLE',
  DIFFICULTY_FILTER = 'DIFFICULTY',
}

interface IExerciseFilterAction {
  type: ExerciseFilterActionTypes;
  payload?: any;
}

const initialState: IExerciseFilters = {
  name: null,
  category: null,
  muscle: null,
  difficulty: null,
};

function exerciseFilterReducer(state: IExerciseFilters, action: IExerciseFilterAction) {
  switch (action.type) {
    case ExerciseFilterActionTypes.NAME_FILTER: {
      return { ...state, name: action.payload };
    }
    case ExerciseFilterActionTypes.CATEGORY_FILTER: {
      return { ...state, category: action.payload };
    }
    case ExerciseFilterActionTypes.MUSCLE_FILTER: {
      return { ...state, muscle: action.payload };
    }
    case ExerciseFilterActionTypes.DIFFICULTY_FILTER: {
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

  const exercisesQuery = useQuery(
    ['exercises', exerciseFilters],
    () => api.getExercises(exerciseFilters),
    {
      staleTime: Infinity,
    }
  );

  const searchChangeHandler = useCallback((searchValue: string) => {
    dispatch({ type: ExerciseFilterActionTypes.NAME_FILTER, payload: searchValue });
  }, []);

  const categoryChangeHandler = useCallback((category: IBasicEntity) => {
    dispatch({ type: ExerciseFilterActionTypes.CATEGORY_FILTER, payload: category.id });
  }, []);

  const muscleChangeHandler = useCallback((muscle: IBasicEntity) => {
    dispatch({ type: ExerciseFilterActionTypes.MUSCLE_FILTER, payload: muscle.id });
  }, []);

  const difficultyChangeHandler = useCallback((difficulty: IBasicEntity) => {
    dispatch({ type: ExerciseFilterActionTypes.DIFFICULTY_FILTER, payload: difficulty.id });
  }, []);

  return (
    <Grid
      height={'20rem'}
      templateRows={{ base: '1fr 1fr 3fr' }}
      templateColumns={{ base: 'repeat(2,1fr)' }}
      gap={3}
    >
      <GridItem>
        <SearchInput variant={'filled'} handleChange={searchChangeHandler} />
      </GridItem>
      <GridItem>
        <DropdownMenu
          placeholder="Filter by type"
          width={'100%'}
          options={categoriesQuery.data}
          isLoading={!categoriesQuery.isSuccess}
          onValueChange={categoryChangeHandler}
        />
      </GridItem>
      <GridItem>
        <DropdownMenu
          placeholder="Filter by muscle"
          width={'100%'}
          options={musclesQuery.data}
          isLoading={!musclesQuery.isSuccess}
          onValueChange={muscleChangeHandler}
        />
      </GridItem>
      <GridItem>
        <DropdownMenu
          placeholder="Filter by difficulty"
          width={'100%'}
          options={difficultiesQuery.data}
          isLoading={!difficultiesQuery.isSuccess}
          onValueChange={difficultyChangeHandler}
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
          height={'100%'}
        />
      </GridItem>
    </Grid>
  );
}

export default SearchExercises;
