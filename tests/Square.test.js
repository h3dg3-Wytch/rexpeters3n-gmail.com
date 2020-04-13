import React from 'react';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';

import Square from '../components/Square';

import { Text, TouchableOpacity } from 'react-native';



describe.only('<Square />', () => {

  it('can take the value X', () => {
      const onPressEvent = jest.fn();
      onPressEvent.mockReturnValue('Pressed');
      const component = shallow(<Square value={'X'} onPress={onPressEvent} />);
      expect(component.find(Text).first().props().children).toEqual('X');
      component.find(TouchableOpacity).first().props().onPress();
      expect(onPressEvent.mock.calls.length).toBe(1);
  });

}); 