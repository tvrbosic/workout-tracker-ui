import { Box, BoxProps, Flex, HStack, Icon } from '@chakra-ui/react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

import { IWorkoutExercise } from 'ts/definitions';

interface IWorkoutExerciseListItemProps extends BoxProps {
  workoutExercise: IWorkoutExercise;
}

function WorkoutExerciseListItem({ workoutExercise, ...rest }: IWorkoutExerciseListItemProps) {
  return (
    <Box
      py={2}
      px={4}
      transition={'all 200ms linear'}
      _hover={{ bgColor: 'gray.600', cursor: 'pointer' }}
    >
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        {`${workoutExercise.exercise.name}: ${workoutExercise.executionInfo}`}

        <HStack spacing={2}>
          <Icon as={FiEdit} color={'blue.500'} width={5} height={5} />
          <Icon as={FiTrash2} color={'red.500'} width={5} height={5} />
        </HStack>
      </Flex>
    </Box>
  );
}

export default WorkoutExerciseListItem;
