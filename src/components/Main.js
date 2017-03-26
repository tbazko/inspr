require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

export default class AppComponent extends React.Component {
  render() {
    return (
      <div className="main-container container">
        {this.props.children}
      </div>
    );
  }
}