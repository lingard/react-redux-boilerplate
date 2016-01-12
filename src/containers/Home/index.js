import React from 'react';
import Helmet from 'react-helmet';

import { Title, Text, View, Component } from 'components';

export default class Home extends Component {
  render() {
    return (
      <View
        textAlign='center'
        size={['fill', 'fill-height']}
        display='flex'
        flex={['col', 'justify-center', 'align-items-center']}>

        <Helmet title='Home'/>
        <Title size='xlarge' margin='b-s'>React redux boilerplate</Title>
        <Text>Just do it!</Text>
      </View>
    );
  }
}
