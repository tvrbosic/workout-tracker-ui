import React, { useReducer, useContext, createContext, useMemo } from 'react';

import { IWorkout } from 'ts/definitions';

export enum CreateWorkoutActionTypes {
  ABC = 'abc',
  XYZ = 'xyz',
}

interface ICreateWorkoutAction {
  type: CreateWorkoutActionTypes;
  payload?: any;
}

interface ICreateWorkoutContext {
  state: IWorkout;
  dispatch: React.Dispatch<ICreateWorkoutAction>;
}

interface ICreateWorkoutProviderProps {
  children?: React.ReactNode;
}

const initialState: IWorkout = {
  id: '',
  name: '',
  category: '',
  date_created: '',
  description: '',
  exercises: [],
};

// Create CreateWorkoutContext
const CreateWorkoutContext = createContext<ICreateWorkoutContext>({
  state: initialState,
  dispatch: () => {},
});

function createWorkoutReducer(state: IWorkout, action: ICreateWorkoutAction) {
  switch (action.type) {
    case 'abc': {
      return { ...state, name: state.name + 'ABC' };
    }
    case 'xyz': {
      return { ...state, name: state.name + 'XYZ' };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function CreateWorkoutProvider({ children }: ICreateWorkoutProviderProps) {
  const [state, dispatch] = useReducer(createWorkoutReducer, initialState as IWorkout);
  // Memoize
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return <CreateWorkoutContext.Provider value={value}>{children}</CreateWorkoutContext.Provider>;
}
// Export custom hook to use CreateWorkoutContext
export const useCreateWorkoutContext = () => useContext(CreateWorkoutContext);
