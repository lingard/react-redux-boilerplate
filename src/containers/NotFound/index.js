import React from 'react';
import Helmet from 'react-helmet';

import { Title, Text, View, Component } from 'components';

export default class Home extends Component {
  render() {
    return (
      <View textAlign='center' size='fill' display='flex' flex={['justify-center', 'align-items-center']}>
        <Helmet title='404'/>
        <Title size='xlarge' margin='b-s'>404</Title>
        <Text>Ze page could not be found...</Text>
      </View>
    );
  }
}
