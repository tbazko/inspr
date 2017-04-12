/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';
import React from 'react'
import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';
import HomeContainer from '../../src/containers/HomeContainer'
import Home from '../../src/components/Home'
import {shallow} from 'enzyme';
import sinon, {spy} from 'sinon';

describe('HomeContainer', function () {

  beforeEach(function () {
    this.HomeContainer = shallow(<HomeContainer />);
    this.instance = this.HomeContainer.instance();
    this.testTopic = 'TestTopic';
    this.pushSpy = spy();
    this.HomeContainer.setProps({history: {push: this.pushSpy}});
  });

  it('should be loading', function () {
    expect(this.instance.state.isLoading).to.equal(true);
  });

  it('should stop loading', function () {
    this.instance.componentDidMount();
    expect(this.instance.state.isLoading).to.equal(false);
  });

  it('renders <Home /> component', function() {
    expect(this.HomeContainer.find(Home)).to.have.length(1);
  });

  it('should have empty "topic" string in state', function() {
    expect(this.instance.state.topic).to.equal('');
  });

  it('should have "topic" in state set to "TestTopic"', function() {
    this.instance.handleUpdateTopic({target: {value: this.testTopic }});
    expect(this.instance.state.topic).to.equal(this.testTopic );
  });

  it('should clear topic', function() {
    this.instance.handleSubmitTopic({target: {value: this.testTopic }, preventDefault: function() {return true}});
    expect(this.instance.state.topic).to.equal('');
  });

  it('should push to history', function() {
    this.instance.handleSubmitTopic({target: {value: this.testTopic }, preventDefault: function() {return true}});
    sinon.assert.callCount(this.pushSpy, 1);
  });

  it('should push to history with "/generator"', function() {
    this.instance.handleStart();
    sinon.assert.callCount(this.pushSpy, 1);
    sinon.assert.calledWith(this.pushSpy, '/generator');
  });
});
