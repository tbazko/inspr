/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';
import React from 'react'
import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';
import Home from 'components/Home'
import {shallow} from 'enzyme';
import {spy} from 'sinon';

describe('Home component', function () {

  beforeEach(function () {
    this.HomeLoading = createComponent(Home, {
      isLoading: true
    });
    this.HOME_PROPS = {
        isLoading: false,
        topic: "TestTopic",
        onStart: spy(),
        onUpdateTopic: spy(),
        onSubmitTopic: spy()
    };
    this.Home = shallow(<Home {...this.HOME_PROPS} />);
    this.form = this.Home.find('form');
    this.input = this.Home.find('input');
  });

  it('should have speed', function () {
    expect(this.HomeLoading.props.speed).to.be.a('number');
  });

  it('should have text', function() {
    expect(this.HomeLoading.props.text).to.be.a('string');
  })

  it('should have input value "TestTopic"', function () {
    expect(this.input.prop('value')).to.equal("TestTopic");
  });

  it('should call "onStart" once', function() {
    let btn = this.Home.find('.btn-primary');
    btn.simulate('click');
    assert(this.HOME_PROPS.onStart.calledOnce);
  });

  it('should call "onStart" once', function() {
    this.input.simulate('change');
    assert(this.HOME_PROPS.onUpdateTopic.calledOnce);
  })

  it('should call "onSubmitTopic" once', function() {
    this.form.simulate('submit');
    assert(this.HOME_PROPS.onSubmitTopic.calledOnce);
  });
});
