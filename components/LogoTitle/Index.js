import React, {PureComponent} from 'react';
import {Image} from 'react-native';

import Logo from '../../assets/logo.png';

export default class LogoTitle extends PureComponent {
    render() {
        return (<Image
        style={{width: 111, height: 30}}
        source={Logo}
        />);
    }
}