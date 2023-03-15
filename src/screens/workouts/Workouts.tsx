import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useQuery } from 'react-query';

import { useApiContext } from 'context/ApiContext';
import HeaderMarginLayout from 'components/layouts/HeaderMarginLayout';
import WorkoutsControlPanel from 'screens/workouts/components/WorkoutsControlPanel';
import WorkoutsTable from 'screens/workouts/components/WorkoutsTable';
import { IWorkout } from 'ts/definitions';
import { formatDate } from 'utils/utility';

interface ITableData {
  name: string;
  category: string;
  date_created: string;
  num_exercises: number;
}

export default function Workouts() {
  const { api } = useApiContext();
  const [workouts, setWorkouts] = useState<ITableData[]>([]);

  const query = useQuery({ queryKey: ['workouts'], queryFn: api.getWorkouts });

  // Normalize data for table
  useEffect(() => {
    if (!query.isLoading && !query.isError) {
      const workouts = query.data.reduce((acc: ITableData[], workout: IWorkout) => {
        acc.push({
          name: workout.name,
          category: workout.category,
          date_created: formatDate(workout.date_created!),
          num_exercises: workout.exercises.length,
        });
        return acc;
      }, []);
      setWorkouts(workouts);
    }
  }, [query.data, query.isLoading, query.isError]);

  return (
    <HeaderMarginLayout>
      <Box py={2} minHeight={'100vh'}>
        <WorkoutsControlPanel />
        <Box>
          <WorkoutsTable
            headers={['Name', 'Category', 'Date created', '# Exercises']}
            data={workouts}
          />
        </Box>
      </Box>
    </HeaderMarginLayout>
  );
}
