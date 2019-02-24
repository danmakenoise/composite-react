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

describe('when i first load up the application', () => {
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
