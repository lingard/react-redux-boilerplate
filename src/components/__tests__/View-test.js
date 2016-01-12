import React from 'react';
import ReactDOM from 'react-dom';
import {renderIntoDocument} from 'react-addons-test-utils';
import {expect} from 'chai';
import View from 'components/View';

describe('View', () => {

  const renderer = renderIntoDocument(
    <View>
      <span>child</span>
    </View>
  );

  const dom = ReactDOM.findDOMNode(renderer);

  it('should render correctly', () => {
    return expect(renderer).to.be.ok;
  });

  it('should render children', () => {
    const child = dom.getElementsByTagName('span')[0];
    expect(child).to.ok();
  });

  // it('should render the correct className', () => {
  //   const styles = require('components/view.css');
  //   expect(styles.infoBar).to.be.a('string');
  //   expect(dom.className).to.include(styles.infoBar);
  // });
});
