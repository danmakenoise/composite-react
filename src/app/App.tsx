import React from 'react';
import { Text } from 'composite-ui';

type PropsType = {
  components: {
    [key: string]: React.Component | React.StatelessComponent;
  };
};

export default function App(props: PropsType) {
  return (
    <div>
      <h1>Composite</h1>
      <Text>This is a test of the text library</Text>
      {Object.keys(props.components).map(name => (
        <Text key={name}>{name}</Text>
      ))}
    </div>
  );
}
