import React, { useReducer } from 'react';
import { Text } from 'composite-ui';
import ComponentsList from './components/ComponentsList';

type ActionType = {
  type: 'SET_ACTIVE_COMPONENT';
  payload: any;
};

type PropsType = {
  components: {
    [key: string]: React.ComponentType;
  };
};

type StateType = {
  activeComponentName: string;
};

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'SET_ACTIVE_COMPONENT':
      return {
        ...state,
        activeComponentName: action.payload,
      };
  }
}

export const StateContext = React.createContext({
  dispatch: (action: ActionType) => {},
  state: {
    activeComponentName: '',
  },
}) as React.Context<{
  dispatch: React.Dispatch<ActionType>;
  state: StateType;
}>;

export default function App(props: PropsType) {
  const initialState = {
    activeComponentName: Object.keys(props.components)[0],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const ActiveComponent = props.components[state.activeComponentName];

  return (
    <StateContext.Provider
      value={{
        dispatch,
        state,
      }}
    >
      <div>
        <h1>Composite</h1>
        <ComponentsList componentNames={Object.keys(props.components)} />
        <ActiveComponent />
      </div>
    </StateContext.Provider>
  );
}
