export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  email: string;
}

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

export interface IWorkout {
  id: string;
  name: string;
  category: string;
  date_created: string;
  description: string;
  exercises: IExercise[];
}
