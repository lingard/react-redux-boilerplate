import React, { PropTypes } from 'react';
import { Link as ReactRouterLink } from 'react-router';

import className from 'utils/className';
import Component from './Component';
import Text from './Text';

import styles from './Link.css';

export default class Link extends Component {

  static propTypes = {
    to: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired
  };

  render() {
    const {className: propClassName, ...other} = this.props;

    const element = this.props.to ? ReactRouterLink : 'a';

    return (
      <Text
        element={element}
        className={className(
          styles.base,
          propClassName
        )}
        {...other}>

        {this.props.children}
      </Text>
    );
  }

}
