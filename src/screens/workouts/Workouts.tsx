import { Box, Container } from '@chakra-ui/react';

import HeaderMarginLayout from 'components/layouts/HeaderMarginLayout';
import WorkoutsControlPanel from 'screens/workouts/components/WorkoutsControlPanel';

export default function Workouts() {
  return (
    <HeaderMarginLayout>
      <Container py={2}>
        <WorkoutsControlPanel />
        <Box>Workouts</Box>
      </Container>
    </HeaderMarginLayout>
  );
}
