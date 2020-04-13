import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

import { shallow } from 'enzyme';

import { initialState } from '../reducer/gridReducer';

describe('<App />', () => {

  it('can render', () => {
    const component = shallow(<App />);
    expect(component.exists()).toEqual(true);

  });
  
});