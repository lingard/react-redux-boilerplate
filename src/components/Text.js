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
  color,
  fontSize,
  fontWeight,
  fontStyle
} from 'styles/utils';

@cssUtils(
  {
    padding,
    margin,
    display,
    position,
    textAlign,
    align,
    layout,
    flex,
    color,
    fontSize,
    fontWeight,
    fontStyle
  },
  {
    fontWeight: 'normal',
    fontSize: 'inherit',
    // decoration: 'initial',
    color: 'base'
  }
)
export default class Text extends Component {

  static propTypes = {
    // decoration: PropTypes.oneOf([
    //   'inherit',
    //   'initial',
    //   'line-through',
    //   'underline',
    //   'overline'
    // ]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    element: PropTypes.node
  };

  static defaultProps = {
    element: 'p',
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
