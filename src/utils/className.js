import R from 'ramda';

export default function className(...args) {
  const joinClassNames = R.compose(R.trim, R.join(' '));
  const parseClassNames = R.compose(joinClassNames, R.filter(R.identity));

  return parseClassNames(args);
}
