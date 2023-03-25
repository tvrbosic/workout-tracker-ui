import { useCallback } from 'react';
import { Box, BoxProps, Flex, HStack, Icon, useDisclosure } from '@chakra-ui/react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

import { IWorkoutExercise } from 'ts/definitions';
import { useCreateWorkoutContext, CreateWorkoutActionTypes } from 'context/CreateWorkoutContext';
import EditExerciseModal from 'screens/create-workout/components/AddOrEditExercise';

interface IWorkoutExerciseListItemProps extends BoxProps {
  workoutExercise: IWorkoutExercise;
}

const transition = 'all 200ms linear';

function WorkoutExerciseListItem({ workoutExercise, ...rest }: IWorkoutExerciseListItemProps) {
  const { dispatch } = useCreateWorkoutContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteHandler = useCallback(
    (workoutExercise: IWorkoutExercise) => {
      dispatch({
        type: CreateWorkoutActionTypes.DELETE_EXERCISE,
        payload: workoutExercise.exercise.id,
      });
    },
    [dispatch]
  );

  return (
    <Box
      py={2}
      px={4}
      transition={'all 200ms linear'}
      _hover={{ bgColor: 'gray.600', cursor: 'pointer' }}
    >
      {isOpen && (
        <EditExerciseModal
          isOpen={isOpen}
          onClose={onClose}
          exercise={workoutExercise.exercise}
          editMode={true}
          executionInfo={workoutExercise.executionInfo}
        />
      )}

      <Flex alignItems={'center'} justifyContent={'space-between'}>
        {`${workoutExercise.exercise.name}: ${workoutExercise.executionInfo}`}
        <HStack spacing={4}>
          <Icon
            as={FiEdit}
            color={'blue.500'}
            width={5}
            height={5}
            transition={transition}
            _hover={{
              color: 'blue.400',
            }}
            onClick={onOpen}
          />
          <Icon
            as={FiTrash2}
            color={'red.500'}
            width={5}
            height={5}
            transition={transition}
            _hover={{
              color: 'red.400',
            }}
            onClick={() => deleteHandler(workoutExercise)}
          />
        </HStack>
      </Flex>
    </Box>
  );
}

export default WorkoutExerciseListItem;
