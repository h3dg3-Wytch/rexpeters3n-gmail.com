import React from 'react';
import renderer from 'react-test-renderer';


import { shallow } from 'enzyme';

import Game from '../components/RejectionButton';

describe('<Game />', () => {

  it('can render', () => {
    const component = shallow(<Game />);
    expect(component.exists()).toEqual(true);
  });

});