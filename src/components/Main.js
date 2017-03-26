require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class AppComponent extends React.Component {
  render() {
    return (
      <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
        <div className="main-container container">
          {this.props.children}
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}