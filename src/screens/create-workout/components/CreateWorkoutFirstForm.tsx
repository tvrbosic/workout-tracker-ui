import { useForm, Controller } from 'react-hook-form';
import {
  Stack,
  Heading,
  FormLabel,
  FormControl,
  Input,
  Textarea,
  Button,
  Flex,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useQuery } from 'react-query';

import { IBasicEntity, IWorkout } from 'ts/definitions';
import { useCreateWorkoutContext, CreateWorkoutActionTypes } from 'context/CreateWorkoutContext';
import { useApiContext } from 'context/ApiContext';
import DropdownMenu from 'components/DropdownMenu';

interface ICreateWorkoutFirstFormProps {
  nextStep: () => void;
}

export default function CreateWorkoutFirstForm({ nextStep }: ICreateWorkoutFirstFormProps) {
  const { state, dispatch } = useCreateWorkoutContext();
  const { api } = useApiContext();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IWorkout>({ defaultValues: state, mode: 'onSubmit' });

  const categoriesQuery = useQuery(['categories'], () => api.getCategories(), {
    staleTime: Infinity,
  });

  const saveData = async (data: IWorkout) => {
    dispatch({ type: CreateWorkoutActionTypes.UPDATE_GENERAL_DATA, payload: data });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(saveData)}>
      <Stack spacing={4} color={'green.300'}>
        <Heading size={'lg'}>Create Workout</Heading>
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
          <Controller
            control={control}
            name="category"
            rules={{ required: 'Category field must not be empty!' }}
            render={({ field }) => (
              <DropdownMenu
                placeholder="Select type"
                options={categoriesQuery.data}
                onValueChange={(option) => field.onChange(option)}
                preselectedValue={field.value as unknown as IBasicEntity}
                isLoading={!categoriesQuery.isSuccess}
                width={'100%'}
              />
            )}
          />
          <FormErrorMessage>{errors.category && errors.category.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.description}>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            resize={'none'}
            minHeight={'150px'}
            variant="filled"
            {...register('description', {
              required: 'Description field must not be empty!',
            })}
          />
          <FormErrorMessage>{errors.description && errors.description.message}</FormErrorMessage>
        </FormControl>

        <Flex justifyContent={'flex-end'}>
          <Button type={'submit'} width={'48%'}>
            Next
          </Button>
        </Flex>
      </Stack>
    </form>
  );
}
