import React, { PropTypes } from 'react';

import className from 'utils/className';
import Component from './Component';
import Text from './Text';

import styles from './Title.css';

export default class Title extends Component {

  static propTypes = {
    fontSize: PropTypes.string.isRequired,
    element: PropTypes.string.isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    fontSize: 'large',
    element: 'h3',
  };

  render() {
    const {fontSize, element, ...other} = this.props;

    return (
      <Text
        fontSize={fontSize}
        fontWeight='bold'
        element={element}
        className={className(
        styles.base,
          this.props.className
        )}
        {...other} />
    );
  }

}
