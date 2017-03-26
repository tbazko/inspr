import React, {PropTypes} from 'react'
import Home from '../components/Home'

export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
    }
  }

  handleUpdateTopic(e) {
    this.setState({
      topic: e.target.value
    });
  }

  handleSubmitTopic(e) {
    e.preventDefault();
    let topic = this.state.topic;
    this.setState({
      topic: ''
    });
    this.props.history.push('/' + topic);
  }

  render() {
    return (
        <Home
          topic={this.state.topic}
          onUpdateTopic={this.handleUpdateTopic.bind(this)}
          onSubmitTopic={this.handleSubmitTopic.bind(this)} />
    )
  }
}