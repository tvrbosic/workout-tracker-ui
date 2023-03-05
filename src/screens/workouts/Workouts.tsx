import { Box } from '@chakra-ui/react';

import HeaderMarginLayout from 'components/layouts/HeaderMarginLayout';
import WorkoutsControlPanel from 'screens/workouts/components/WorkoutsControlPanel';
import Table from 'components/Table';

const MockData = [
  ['Workout 1', 'Cardio', '2021-01-01', 11],
  ['Workout 2', 'Strength', '2021-01-02', 9],
  ['Workout 3', 'Strength', '2021-01-03', 6],
  ['Workout 4', 'Cardio', '2021-01-04', 10],
  ['Workout 5', 'Stretching', '2021-01-05', 8],
  ['Workout 6', 'Strength', '2021-01-06', 5],
  ['Workout 7', 'Strongman', '2021-01-07', 8],
  ['Workout 8', 'Olympic Weightlifting ', '2021-01-08', 7],
  ['Workout 9', 'Strength', '2021-01-09', 6],
  ['Workout 10', 'Stretching', '2021-01-10', 6],
  ['Workout 11', 'Cardio', '2021-01-11', 1],
  ['Workout 12', 'Powerlifting', '2021-01-12', 11],
  ['Workout 13', 'Strength', '2021-01-13', 8],
  ['Workout 14', 'Cardio', '2021-01-14', 8],
  ['Workout 15', 'Plyometrics', '2021-01-15', 9],
];

export default function Workouts() {
  return (
    <HeaderMarginLayout>
      <Box py={2} minHeight={'100vh'}>
        <WorkoutsControlPanel />
        <Box>
          <Table headers={['Name', 'Type', 'Date created', '# Exercises']} data={MockData} />
        </Box>
      </Box>
    </HeaderMarginLayout>
  );
}
