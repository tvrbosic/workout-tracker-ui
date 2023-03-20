import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  Text,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { IExercise, IBasicEntity } from 'ts/definitions';
import { useCreateWorkoutContext, CreateWorkoutActionTypes } from 'context/CreateWorkoutContext';

interface IAddExerciseModalProps {
  exercise: IExercise;
  isOpen: boolean;
  onClose: () => void;
}

function AddExerciseModal({ exercise, isOpen, onClose }: IAddExerciseModalProps) {
  const { state, dispatch } = useCreateWorkoutContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ executionInfo: string }>();

  const saveExercise = (data: { executionInfo: string }) => {
    dispatch({
      type: CreateWorkoutActionTypes.ADD_EXERCISE,
      payload: { exercise, executionInfo: data.executionInfo },
    });
    reset();
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} preserveScrollBarGap={true}>
        <ModalOverlay />
        <ModalContent backgroundColor={'gray.700'} color={'green.300'}>
          <ModalHeader>Add Exercise</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(saveExercise)}>
            <ModalBody>
              <Stack spacing={2}>
                <Flex>
                  <Text>Name: </Text>
                  <Text color={'gray.50'} ml={2}>
                    {exercise.name}
                  </Text>
                </Flex>

                <Flex>
                  <Text>Category: </Text>
                  <Text color={'gray.50'} ml={2}>
                    {exercise.category}
                  </Text>
                </Flex>

                <Flex>
                  <Text>Difficulty: </Text>
                  <Text color={'gray.50'} ml={2}>
                    {exercise.difficulty}
                  </Text>
                </Flex>

                <Flex>
                  <Text>Primary Muscle: </Text>
                  <Text color={'gray.50'} ml={2}>
                    {exercise.primary_muscle}
                  </Text>
                </Flex>

                {exercise.secondary_muscles.length === 0 ? (
                  <Flex>
                    <Text>Secondary Muscles: </Text>
                    <Text color={'gray.50'} ml={2}>
                      None
                    </Text>
                  </Flex>
                ) : (
                  <>
                    <Text>Secondary Muscles: </Text>
                    <Text color={'gray.50'} ml={2}>
                      {/** Reduce secondary_muscles to array of muscle names, convert to string and add comma between elements */}
                      {exercise.secondary_muscles
                        .reduce((acc: string[], curr: IBasicEntity) => {
                          return [...acc, curr.name];
                        }, [])
                        .join(', ')}
                    </Text>
                  </>
                )}

                <FormControl isInvalid={!!errors.executionInfo}>
                  <FormLabel htmlFor="executionInfo">Execution Info</FormLabel>
                  <Input
                    type="text"
                    variant="filled"
                    {...register('executionInfo', {
                      required: 'Execution info field must not be empty!',
                    })}
                  />
                  <FormErrorMessage>
                    {errors.executionInfo && errors.executionInfo.message}
                  </FormErrorMessage>
                </FormControl>
              </Stack>
            </ModalBody>

            <ModalFooter justifyContent={'space-between'}>
              <Button mr={3} onClick={onClose} w={'48%'} variant="outline">
                Close
              </Button>
              <Button type="submit" w={'48%'}>
                Add Exercise
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddExerciseModal;
