/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';
import React from 'react'
import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';
import HomeContainer from '../../src/containers/HomeContainer'
import {shallow} from 'enzyme';
import {spy} from 'sinon';

describe('HomeContainer', function () {

  beforeEach(function () {
    this.HomeContainer = shallow(<HomeContainer />);
  });

  it('should be loading', function () {
    expect(this.HomeContainer.instance().state.isLoading).to.equal(true);
  });

  it('should stop loading', function () {
    this.HomeContainer.instance().componentDidMount();
    expect(this.HomeContainer.instance().state.isLoading).to.equal(false);
  });
});
