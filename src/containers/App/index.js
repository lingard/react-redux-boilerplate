import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import { View, Component } from 'components';
import config from '../../config';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    return (
      <View display='flex' size={['fill', 'fill-height']}>
        <Helmet {...config.app.head}/>

        {this.props.children}
      </View>
    );
  }
}
