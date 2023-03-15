import { Box, BoxProps } from '@chakra-ui/react';

import { IExercise } from 'ts/definitions';

interface IExerciseListItemProps extends BoxProps {
  exercise: IExercise;
}

function ExerciseListItem({ exercise, ...rest }: IExerciseListItemProps) {
  return (
    <Box key={exercise.id} py={2} px={4} {...rest}>
      {exercise.name}
    </Box>
  );
}

export default ExerciseListItem;
