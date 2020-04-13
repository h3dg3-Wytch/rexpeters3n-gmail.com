import React from 'react';
import renderer from 'react-test-renderer';


import { Header } from 'react-native/Libraries/NewAppScreen';

describe('<Header />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Header/>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children.length).toBe(1);
  });

  it('can take the status ', () => {
    const testInstance = renderer.create(<Header status={'foo'}/>).toJSON();
    expect(testInstance.children[0].children[0]).toEqual('foo');
  });

});