import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useQuery } from 'react-query';

import { useApiContext } from 'context/ApiContext';
import HeaderMarginLayout from 'components/layouts/HeaderMarginLayout';
import WorkoutsControlPanel from 'screens/workouts/components/WorkoutsControlPanel';
import Table from 'components/Table';
import { IWorkout } from 'ts/definitions';
import { formatDate } from 'utils/utility';

interface ITableData {
  name: string;
  type: string;
  date_created: string;
  num_exercises: number;
}

export default function Workouts() {
  const { api } = useApiContext();
  const [workouts, setWorkouts] = useState<ITableData[]>([]);

  const query = useQuery({ queryKey: ['workouts'], queryFn: api.getWorkouts });

  // Normalize data for table
  useEffect(() => {
    if (query.isFetched) {
      console.log(query.data.length);
      const workouts = query.data.reduce((acc: ITableData[], workout: IWorkout) => {
        console.log(acc);
        acc.push({
          name: workout.name,
          type: workout.type,
          date_created: formatDate(workout.date_created),
          num_exercises: workout.exercises.length,
        });
        return acc;
      }, []);
      setWorkouts(workouts);
    }
  }, [query.data, query.isFetched]);

  return (
    <HeaderMarginLayout>
      <Box py={2} minHeight={'100vh'}>
        <WorkoutsControlPanel />
        <Box>
          <Table headers={['Name', 'Type', 'Date created', '# Exercises']} data={workouts} />
        </Box>
      </Box>
    </HeaderMarginLayout>
  );
}
