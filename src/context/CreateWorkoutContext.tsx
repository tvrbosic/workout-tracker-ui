import React, { useReducer, useContext, createContext, useMemo } from 'react';

import { IWorkout } from 'ts/definitions';

export enum CreateWorkoutActionTypes {
  UPDATE_GENERAL_DATA = 'GENERAL_DATA',
  UPDATE_EXERCISES = 'EXERCISES',
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
    case CreateWorkoutActionTypes.UPDATE_GENERAL_DATA: {
      return {
        ...state,
        name: action.payload.name,
        category: action.payload.category,
        description: action.payload.description,
      };
    }
    case CreateWorkoutActionTypes.UPDATE_EXERCISES: {
      return { ...state, exercises: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function CreateWorkoutProvider({ children }: ICreateWorkoutProviderProps) {
  const [state, dispatch] = useReducer(createWorkoutReducer, initialState);
  // Memoize
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return <CreateWorkoutContext.Provider value={value}>{children}</CreateWorkoutContext.Provider>;
}
// Export custom hook to use CreateWorkoutContext
export const useCreateWorkoutContext = () => useContext(CreateWorkoutContext);
