import { Box, BoxProps, Flex, Icon, useDisclosure } from '@chakra-ui/react';
import { IoMdAddCircle } from 'react-icons/io';

import { IExercise } from 'ts/definitions';
import AddExerciseModal from 'screens/create-workout/components/AddExercise';

interface IExerciseListItemProps extends BoxProps {
  exercise: IExercise;
}

function ExerciseListItem({ exercise, ...rest }: IExerciseListItemProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      py={2}
      px={4}
      transition={'all 200ms linear'}
      _hover={{ bgColor: 'gray.600', cursor: 'pointer' }}
    >
      <AddExerciseModal isOpen={isOpen} onClose={onClose} exercise={exercise} />

      <Flex alignItems={'center'} justifyContent={'space-between'} onClick={onOpen}>
        {exercise.name}
        <Icon as={IoMdAddCircle} color={'green.500'} width={5} height={5} onClick={onOpen} />
      </Flex>
    </Box>
  );
}

export default ExerciseListItem;
