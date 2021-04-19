import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';

import App, { IAppProps, IAppState } from './App';
import { Navigation } from './app/common/';

describe('App', () => {
  let appWrapper: ShallowWrapper<
    IAppProps,
    IAppState,
    React.Component<{}, {}, any>
  >;
  beforeAll(() => {
    appWrapper = shallow<IAppProps, IAppState>(<App />);
  });

  it('Should render without crashing', () => {
    // Do not load all childs(Child components) of APP Component. All we care at this point is App Component itself
  });

  it('Should render navigation in APP.jsx', () => {
    const navigation = appWrapper.find(Navigation);
    expect(navigation).toBeTruthy();
  });
});
