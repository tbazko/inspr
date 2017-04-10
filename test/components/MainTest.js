/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';
import createComponent from 'helpers/shallowRenderHelper';
import Main from 'components/Main';

describe('MainComponent', function () {

  beforeEach(function () {
    this.MainComponent = createComponent(Main, {}, 'test child');
  });

  it('should have its component name as default className', function () {
    expect(this.MainComponent.props.className).to.equal('main-container container');
  });

  it('should wrap custom children', function () {
    expect(this.MainComponent.props.children[0]).to.equal('test child');
  });
});
