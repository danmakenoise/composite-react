import React, { useContext } from 'react';
import { Text } from 'composite-ui';
import { StateContext } from '../App';

type PropsType = {
  componentNames: string[];
};

export default function ComponentsList(props: PropsType) {
  const { dispatch } = useContext(StateContext);

  return (
    <React.Fragment>
      {props.componentNames.map(name => (
        <div
          key={name}
          onClick={() =>
            dispatch({ type: 'SET_ACTIVE_COMPONENT', payload: name })
          }
        >
          <Text>{name}</Text>
        </div>
      ))}
    </React.Fragment>
  );
}
