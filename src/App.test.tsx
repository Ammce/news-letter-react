import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';

import App, { IAppProps, IAppState } from './App';
import PersonList from './app/modules/PersonList/PersonList';

describe('App', () => {
  let appWrapper: ShallowWrapper<
    IAppProps,
    IAppState,
    React.Component<{}, {}, any>
  >;
  beforeAll(() => {
    appWrapper = shallow<IAppProps, IAppState>(<App />);
  });

  it('renders without crashing', () => {
    // Do not load all childs(Child components) of APP Component. All we care at this point is App Component itself
  });

  it('Renders a person list', () => {
    // Finding another component
    const personList = appWrapper.find(PersonList);
    expect(personList).toHaveLength(1);
  });

  it('Should has state', () => {
    // For functional component it is different approach unlike class-based components
    const appState = appWrapper.state();
    expect(appState).not.toBeNull();
  });

  it('It should have persons property defined', () => {
    const appState = appWrapper.state();
    expect(appState.persons).toBeDefined();
  });

  it('Passes persons property of state to personList as prop', () => {
    const personList = appWrapper.find(PersonList);
    expect(personList.props().persons).toEqual(appWrapper.state().persons);
  });
});
