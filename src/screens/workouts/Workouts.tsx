import { Box } from '@chakra-ui/react';

import HeaderMarginLayout from 'components/layouts/HeaderMarginLayout';
import WorkoutsControlPanel from 'screens/workouts/components/WorkoutsControlPanel';

export default function Workouts() {
  return (
    <HeaderMarginLayout>
      <Box py={2} minHeight={'100vh'}>
        <WorkoutsControlPanel />
        <Box>Workouts</Box>
      </Box>
    </HeaderMarginLayout>
  );
}
