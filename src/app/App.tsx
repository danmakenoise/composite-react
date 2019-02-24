import React, { useReducer } from 'react';
import { Text } from 'composite-ui';

type PropsType = {
  components: {
    [key: string]: React.ComponentType;
  };
};

type StateType = {
  activeComponentName: string;
};

type ActionType = {
  type: string;
  payload: any;
};

const SET_ACTIVE_COMPONENT = 'SET_ACTIVE_COMPONENT';

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case SET_ACTIVE_COMPONENT:
      return {
        activeComponentName: action.payload,
      };
    default:
      throw new Error();
  }
}

export default function App(props: PropsType) {
  const initialState = {
    activeComponentName: Object.keys(props.components)[0],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const ActiveComponent = props.components[state.activeComponentName];

  return (
    <div>
      <h1>Composite</h1>
      <Text>This is a test of the text library</Text>
      {Object.keys(props.components).map(name => (
        <div
          key={name}
          onClick={() =>
            dispatch({ type: SET_ACTIVE_COMPONENT, payload: name })
          }
        >
          <Text>{name}</Text>
        </div>
      ))}
      <ActiveComponent />
    </div>
  );
}
