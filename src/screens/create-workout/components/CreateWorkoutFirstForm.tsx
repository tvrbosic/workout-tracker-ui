import { useForm } from 'react-hook-form';
import {
  Stack,
  FormLabel,
  FormControl,
  Input,
  Textarea,
  Button,
  ButtonGroup,
  FormErrorMessage,
} from '@chakra-ui/react';

import { useCreateWorkoutContext, CreateWorkoutActionTypes } from 'context/CreateWorkoutContext';
import { IWorkout } from 'ts/definitions';

interface ICreateWorkoutFirstFormProps {
  nextStep: () => void;
}

export default function CreateWorkoutFirstForm({ nextStep }: ICreateWorkoutFirstFormProps) {
  const { state, dispatch } = useCreateWorkoutContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IWorkout>();

  const saveData = async (data: IWorkout) => {
    console.log(data);
    dispatch({ type: CreateWorkoutActionTypes.UPDATE_GENERAL_DATA, payload: data });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(saveData)}>
      <Stack spacing={4} color={'green.300'}>
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

        <FormControl isInvalid={!!errors.category}>
          <FormLabel htmlFor="category">Category</FormLabel>
          <Input
            type="text"
            variant="filled"
            {...register('category', {
              required: 'Category field must not be empty!',
            })}
          />
          <FormErrorMessage>{errors.category && errors.category.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.description}>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            variant="filled"
            {...register('description', {
              required: 'Description field must not be empty!',
            })}
          />
          <FormErrorMessage>{errors.description && errors.description.message}</FormErrorMessage>
        </FormControl>

        <ButtonGroup>
          <Button isDisabled={true}>Back</Button>
          <Button type={'submit'}>Next</Button>
        </ButtonGroup>
      </Stack>
    </form>
  );
}
