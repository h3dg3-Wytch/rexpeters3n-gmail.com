import React from 'react';
import renderer from 'react-test-renderer';


import { Header } from 'react-native/Libraries/NewAppScreen';

describe('<Header />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Header/>).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
    expect(tree.children.length).toBe(1);
  });

});