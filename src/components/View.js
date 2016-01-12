import React, {PropTypes} from 'react';

import Component from './Component';
import cssUtils from 'utils/cssUtils';

import {
  padding,
  margin,
  display,
  position,
  textAlign,
  align,
  layout,
  flex,
  background,
  size,
  fontSize
} from 'styles/utils';

@cssUtils({
  padding,
  margin,
  display,
  position,
  textAlign,
  align,
  layout,
  flex,
  background,
  size,
  fontSize
})
export default class View extends Component {

  static propTypes = {
    element: PropTypes.node,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    element: 'div',
  };

  render() {
    const {element, children, className: propClassName, ...other} = this.props;

    const Element = element;

    return (
      <Element
        className={propClassName}
        {...other}>
        {children}
      </Element>
    );
  }
}
