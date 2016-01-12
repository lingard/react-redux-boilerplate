var R = require('ramda');

var breakpoints = {
  '--palm': '(min-width: 0) and (max-width: 320px)',
  '--lap': '(min-width: 320px) and (max-width: 960px)',
  '--desk': '(min-width: 960px)'
};

var lineHeight = {
  lineHeightBase: '26px',
  lineHeightBaseRatio: '1.5',
  lineHeightTitleRatio: '1.1'
};

var fontWeight = {
  fontWeightLight: '100',
  fontWeightNormal: '400',
  fontWeightSemibold: '600',
  fontWeightBold: '700'
};

var fontSize = {
  fontSizeBase: '18px',
  fontSizeXXLarge: '54px',
  fontSizeXLarge: '38px',
  fontSizeLarge: '32px',
  fontSizeMedium: '24px',
  fontSizeSmall: '16px',
  fontSizeXSmall: '14px',
  fontSizeXXSmall: '13px'
};

var color = {
  colorTextBase: '#151515',
  colorTextEmphasized: '#111',
  colorTextMuted: '#bfbfbf',
  colorTextAccent: 'green',
  colorTextWarning: 'yellow',
  colorTextError: 'red',
  colorTextSuccess: 'green',
  colorTextInfo: 'blue',

  colorBackgroundAccent: '#ffff00',

  colorBorderBase: '#1a1a1a',
  colorBorderAccent: '#ffff00'
};

var easing = {
  easingBase: 'cubic-bezier(0.230,  1.000, 0.320, 1.000)'
};

module.exports = {
  variables: R.mergeAll([
    lineHeight,
    fontWeight,
    fontSize,
    color,
    easing
  ]),
  lineHeight: lineHeight,
  fontWeight: fontWeight,
  fontSize: fontSize,
  color: color,
  easing: easing,
  breakpoints: breakpoints
}

