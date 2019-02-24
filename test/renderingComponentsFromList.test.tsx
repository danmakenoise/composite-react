import * as React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import App from '../src/app/App';

afterEach(cleanup);

const Hello: React.StatelessComponent = () => <h1>WORLD</h1>;
const Foo: React.StatelessComponent = () => <h1>BAR</h1>;

const MOCK_COMPONENTS = {
  Hello,
  Foo,
};

describe('when i click on component names in the component list', () => {
  it('renders that component on screen', () => {
    const { container, getByText } = render(
      <App components={MOCK_COMPONENTS} />,
    );

    fireEvent.click(getByText('Hello'));
    expect(container.textContent).toMatch('WORLD');
    expect(container.textContent).not.toMatch('BAR');

    fireEvent.click(getByText('Foo'));
    expect(container.textContent).toMatch('BAR');
    expect(container.textContent).not.toMatch('WORLD');
  });
});
