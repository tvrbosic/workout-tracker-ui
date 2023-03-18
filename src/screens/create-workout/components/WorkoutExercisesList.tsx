import { Box, BoxProps } from '@chakra-ui/react';

import { IWorkoutExercise } from 'ts/definitions';
import WorkoutExercisesListItem from 'screens/create-workout/components/WorkoutExercisesListItem';

interface IExerciseListProps extends BoxProps {
  workoutExercises: Array<IWorkoutExercise>;
}

function WorkoutExercisesList({ workoutExercises = [], ...rest }: IExerciseListProps) {
  return (
    <Box {...rest}>
      <>
        {workoutExercises.map((workoutExercise: IWorkoutExercise) => (
          <WorkoutExercisesListItem
            key={workoutExercise.exercise.id}
            workoutExercise={workoutExercise}
          />
        ))}
      </>
    </Box>
  );
}

export default WorkoutExercisesList;
