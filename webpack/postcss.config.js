var autoprefixer = require('autoprefixer');
var postcssSimpleVars = require('postcss-simple-vars');
var postcssCssVariables = require('postcss-css-variables');
var postcssCustomMedia = require('postcss-custom-media');
var postcssMixins = require('postcss-mixins');
var postcssSelectorNot = require('postcss-selector-not');
var postcssImport = require('postcss-import');
var postcssNested = require('postcss-nested');
var postcssSize = require('postcss-size');
var postcssVerticalRhythm = require('postcss-vertical-rhythm');
var postcssHexRgba = require('postcss-hexrgba');
var postcssReporter = require('postcss-reporter');
var postcssPxToRem = require('postcss-pxtorem');
var postcssFunctions = require('postcss-functions');
var csswring = require('csswring');

var cssVariables = require('../src/styles/variables').variables;
var breakpoints = require('../src/styles/variables').breakpoints;

module.exports = function postcssConfig() {
  return [
    autoprefixer({
      browsers: ['last 2 versions', 'IE > 8'] // ...supporting the last 2 major browser versions and IE 8 and up...
    }),
    csswring,
    postcssImport({
      glob: true,
      // see postcss-import docs to learn about onImport callback
      // https://github.com/postcss/postcss-import

      onImport: function (files) {
        files.forEach(this.addDependency);
      }.bind(this)
    }),
    postcssMixins(),
    postcssFunctions({
      functions: {
        // TODO: move/remove this
        calcRelativeValue: function(size, base, unit) {
          var unit = unit ? unit : 'rem';
          var value =(size / base) * 1;

          return value + unit;
        }
      }
    }),
    postcssCustomMedia({
      extensions: breakpoints
    }),
    postcssNested,
    postcssSimpleVars(),
    postcssCssVariables({
      variables: cssVariables
    }),
    postcssVerticalRhythm,
    postcssSelectorNot,
    postcssHexRgba,
    postcssSize,
    postcssPxToRem({
      rootValue: 18, //styleVars.fontSizeBase,
      unitPrecision: 5,
      propWhiteList: [
        'font',
        'font-size',
        'line-height',
        'letter-spacing',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'height',
        'width'
      ],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 1
    }),
    postcssReporter({ // This plugin makes sure we get warnings in the console
      clearMessages: true
    })
  ];
}
