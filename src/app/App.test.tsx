import React from 'react';
import { cleanup, render } from 'react-testing-library';
import App from './App';

afterEach(cleanup);

const Hello: React.StatelessComponent = () => <h1>WORLD</h1>;
const Foo: React.StatelessComponent = () => <h1>Bar</h1>;

const MOCK_COMPONENTS = {
  Hello,
  Foo,
};

describe('<App />', () => {
  it('displays the name of the app', () => {
    const { container } = render(<App components={MOCK_COMPONENTS} />);
    expect(container.textContent).toMatch('Composite');
  });

  it('display the supplied component names', () => {
    const { container } = render(<App components={MOCK_COMPONENTS} />);
    expect(container.textContent).toMatch('Hello');
    expect(container.textContent).toMatch('Foo');
  });

  it('display the supplied component names', () => {
    const { container } = render(<App components={MOCK_COMPONENTS} />);
    expect(container.textContent).toMatch('Hello');
    expect(container.textContent).toMatch('Foo');
  });
});
