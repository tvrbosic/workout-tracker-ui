import { useState } from 'react';
import { Center, Box, Progress } from '@chakra-ui/react';

import HeaderMarginLayout from 'components/layouts/HeaderMarginLayout';
import { CreateWorkoutProvider } from 'context/CreateWorkoutContext';
import CreateWorkoutFirstForm from 'screens/create-workout/components/CreateWorkoutFirstForm';
import CreateWorkoutSecondForm from 'screens/create-workout/components/CreateWorkoutSecondForm';

function CreateWorkout() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);

  const previousStep = () => {
    setStep(1);
    setProgress(50);
  };

  const nextStep = () => {
    setStep(2);
    setProgress(100);
  };

  return (
    <HeaderMarginLayout>
      <CreateWorkoutProvider>
        <Center pt={10}>
          <Box
            width={{ base: '100vw', md: '80vw', lg: '50vw', xl: '40vw' }}
            rounded={'lg'}
            bg={'gray.700'}
            boxShadow={'lg'}
            p={8}
          >
            <Progress value={progress} mb="5%" mx="5%"></Progress>
            {step === 1 ? (
              <CreateWorkoutFirstForm nextStep={nextStep} />
            ) : (
              <CreateWorkoutSecondForm previousStep={previousStep} />
            )}
          </Box>
        </Center>
      </CreateWorkoutProvider>
    </HeaderMarginLayout>
  );
}

export default CreateWorkout;
