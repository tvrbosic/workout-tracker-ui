import { useForm, Controller } from 'react-hook-form';
import { Stack, Heading, FormControl, Flex, Button, FormErrorMessage } from '@chakra-ui/react';
import { useCreateWorkoutContext, CreateWorkoutActionTypes } from 'context/CreateWorkoutContext';
import { IWorkout } from 'ts/definitions';
import SearchExercises from 'screens/create-workout/components/SearchExercises';
import WorkoutExercisesList from 'screens/create-workout/components/WorkoutExercisesList';

interface ICreateWorkoutSecondFormProps {
  previousStep: () => void;
}

export default function CreateWorkoutSecondForm({ previousStep }: ICreateWorkoutSecondFormProps) {
  const { state, dispatch } = useCreateWorkoutContext();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IWorkout>();

  const saveData = async (data: IWorkout) => {
    console.log(data);
    dispatch({ type: CreateWorkoutActionTypes.UPDATE_GENERAL_DATA, payload: data });
    previousStep();
  };

  return (
    <form onSubmit={handleSubmit(saveData)}>
      <Stack spacing={8} color={'green.300'}>
        <Heading size={'lg'}>Browse Exercises</Heading>
        <SearchExercises />

        <Heading size={'lg'}>Added Exercises</Heading>
        <FormControl isInvalid={!!errors.exercises}>
          <Controller
            control={control}
            name="exercises"
            rules={{ required: 'Workout exercises must not be empty!' }}
            render={({ field }) => (
              <WorkoutExercisesList
                overflow={'auto'}
                color={'gray.100'}
                bgColor={'whiteAlpha.100'}
                borderRadius={'md'}
                minHeight={'12rem'}
                sx={{
                  '&::-webkit-scrollbar': {
                    width: '8px',
                  },
                  '&::-webkit-scrollbar-track': {
                    width: '8px',
                    background: 'whiteAlpha.200',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: 'green.500',
                    borderRadius: '24px',
                  },
                }}
                workoutExercises={state.exercises}
              />
            )}
          />
          <FormErrorMessage>{errors.category && errors.category.message}</FormErrorMessage>
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
