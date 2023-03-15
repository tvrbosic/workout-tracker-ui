import { Box, BoxProps, Flex, Icon } from '@chakra-ui/react';
import { IoMdAddCircle } from 'react-icons/io';

import { IExercise } from 'ts/definitions';

interface IExerciseListItemProps extends BoxProps {
  key: string;
  exercise: IExercise;
}

function ExerciseListItem({ key, exercise, ...rest }: IExerciseListItemProps) {
  return (
    <Box
      key={exercise.id}
      py={2}
      px={4}
      transition={'all 200ms linear'}
      _hover={{ bgColor: 'gray.600', cursor: 'pointer' }}
    >
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        {exercise.name}
        <Icon as={IoMdAddCircle} color={'green.500'} width={5} height={5} />
      </Flex>
    </Box>
  );
}

export default ExerciseListItem;
