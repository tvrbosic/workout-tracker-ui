// ########## General ##########
export interface IDropdownOption {
  id: string;
  name: string;
}

// ########## Authentication ##########
export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  email: string;
}

// ########## Exercise ##########
export interface IExercise {
  id: string;
  name: string;
  category: string;
  difficulty: string;
  force: string | null;
  mechanics: string | null;
  equipment: string | null;
  primary_muscle: string;
  secondary_muscles: string[];
  instructions: string;
}

export interface IWorkoutExercise {
  exercise: IExercise;
  executionInfo: string;
}

export interface IExerciseFilters {
  name: string | null;
  category: number | null;
  difficulty: number | null;
  muscle: number | null;
}

// ########## Workout ##########
export interface IWorkout {
  id?: string;
  name: string;
  category: string;
  date_created?: string;
  description: string;
  exercises: IExercise[];
}
