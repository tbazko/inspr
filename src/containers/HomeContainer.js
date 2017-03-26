import React, {PropTypes} from 'react'
import Home from '../components/Home'

export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
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
    this.props.history.push('/generator/' + topic);
  }

  handleStart() {
    this.props.history.push('/generator');
  }

  render() {
    return (
        <Home
          isLoading={this.state.isLoading}
          topic={this.state.topic}
          onUpdateTopic={this.handleUpdateTopic.bind(this)}
          onSubmitTopic={this.handleSubmitTopic.bind(this)}
          onStart={this.handleStart.bind(this)} />
    )
  }
}