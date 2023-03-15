import { Box, BoxProps, Center, Spinner } from '@chakra-ui/react';

import { IExercise } from 'ts/definitions';
import ExerciseListItem from 'screens/create-workout/components/ExerciseListItem';

interface IExerciseListProps extends BoxProps {
  exercises: Array<IExercise>;
  isLoading: boolean;
}

function ExerciseList({ isLoading, exercises, ...rest }: IExerciseListProps) {
  return (
    <Box {...rest}>
      {!isLoading ? (
        <>
          {exercises.map((exercise: IExercise) => (
            <ExerciseListItem key={exercise.id} exercise={exercise} />
          ))}
        </>
      ) : (
        <Center height={'100%'} {...rest}>
          <Spinner color="green.500" />
        </Center>
      )}
    </Box>
  );
}

export default ExerciseList;
