/**
 * TODO: refactor all this worthless code...
 */

import React, {PropTypes} from 'react';
import R from 'ramda';
// import hoistStatics from 'hoist-non-react-statics';

import Component from '../components/Component';

const mergeDefaultsWithProps = (props, defaults) => ({
  ...defaults,
  ...props
});

const pickUtilsFromProps = (props, utils) => R.pick(R.keys(utils), props);

const mapPropUtilsToUtils = R.curry((utils, propUtils) => {

  const getUtilClassName = R.curry((utilType, utilName) => R.prop(utilName, utilType));
  const getUtilClassNames = utilType => R.ifElse(
    R.isArrayLike,
    R.map(getUtilClassName(utilType)),
    utilName => R.of(getUtilClassName(utilType, utilName))
  );

  return R.reduce((classNames, utilType) => {
    const utilClassNames = getUtilClassNames(R.prop(utilType, utils))(R.prop(utilType, propUtils));

    return R.concat(classNames, utilClassNames);
  }, [], R.keys(propUtils));

});

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default function cssUtils(utils, defaults = {}) {

  return function wrapWithCssUtils(WrappedComponent) {

    class Connect extends Component {
      render() {
        const {className, ...rest} = this.props;
        const mergedProps = mergeDefaultsWithProps(rest, defaults);
        const propUtils = pickUtilsFromProps(mergedProps, utils);
        const propsClassName = R.compose(
          R.join(' '),
          R.filter(R.identity),
          R.append(className),
          mapPropUtilsToUtils(utils)
        )(propUtils);

        return React.createElement(WrappedComponent, {
          className: propsClassName,
          ...rest,
          ref: 'wrappedInstance'
        });
      }
    }

    Connect.displayName = `CssUtils(${getDisplayName(WrappedComponent)})`;
    Connect.WrappedComponent = WrappedComponent;
    Connect.propTypes = {
      className: PropTypes.string
    };

    return Connect;
  };
}
