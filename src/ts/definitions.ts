export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  email: string;
}

export interface IExercise {
  name: string;
  type: string;
  muscle: string;
  difficulty: string;
  instructions: string;
}

export interface IWorkout {
  id: string;
  name: string;
  type: string;
  date_created: string;
  description: string;
  // user: IUser;
  exercises: IExercise[];
}
