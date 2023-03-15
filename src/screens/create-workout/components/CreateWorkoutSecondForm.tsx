import { useForm } from 'react-hook-form';
import {
  Stack,
  FormLabel,
  FormControl,
  Input,
  Flex,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useCreateWorkoutContext, CreateWorkoutActionTypes } from 'context/CreateWorkoutContext';
import { IWorkout } from 'ts/definitions';
import SearchExercises from 'screens/create-workout/components/SearchExercises';

interface ICreateWorkoutSecondFormProps {
  previousStep: () => void;
}

export default function CreateWorkoutSecondForm({ previousStep }: ICreateWorkoutSecondFormProps) {
  const { state, dispatch } = useCreateWorkoutContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IWorkout>();

  const saveData = async (data: IWorkout) => {
    console.log(data);
    dispatch({ type: CreateWorkoutActionTypes.UPDATE_GENERAL_DATA, payload: data });
    previousStep();
  };

  return (
    <form onSubmit={handleSubmit(saveData)}>
      <Stack spacing={4} color={'green.300'}>
        <SearchExercises />
        <FormControl isInvalid={!!errors.name}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            type="text"
            variant="filled"
            {...register('name', {
              required: 'Name field must not be empty!',
            })}
          />
          <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
        </FormControl>

        <Flex justifyContent={'space-between'}>
          <Button onClick={previousStep} width={'48%'}>
            Back
          </Button>

          <Button type={'submit'} width={'48%'}>
            Finish
          </Button>
        </Flex>
      </Stack>
    </form>
  );
}
