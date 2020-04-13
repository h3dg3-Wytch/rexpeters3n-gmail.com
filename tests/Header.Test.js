import React from 'react';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';

import { Header } from 'react-native/Libraries/NewAppScreen';

import { Text, TouchableOpacity } from 'react-native';

describe('<Header />', () => {

    it('can take the value X', () => {
        const component = shallow(<RejectionButton status={'Winner'} />);
        expect(component.find(Text).first().props().children).toEqual('Winner');
    });
 

});