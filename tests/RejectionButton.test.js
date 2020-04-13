import React from 'react';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';

import RejectionButton from '../components/RejectionButton';
import { Text, TouchableOpacity } from 'react-native';

describe('<RejectionButton />', () => {
 
  it('can reset', () => {
    const onPressEvent = jest.fn();
      onPressEvent.mockReturnValue('Pressed');
      const component = shallow(<RejectionButton reset={onPressEvent} />);
      component.find(Text).first().props().onPress();
      expect(onPressEvent.mock.calls.length).toBe(1);
  });

});