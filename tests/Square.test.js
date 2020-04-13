import React from 'react';
import renderer from 'react-test-renderer';

import Square from '../components/Square';

import { Text } from 'react-native';

describe('<Square />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Square/>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children.length).toBe(1);
  });

  it('can take the value X', () => {
    const testInstance = renderer.create(<Square value={'X'}/>).toJSON();
    expect(testInstance.children[0].children[0]).toEqual('X');
  });

});