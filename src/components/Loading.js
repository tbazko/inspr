import React, {PropTypes} from 'react'

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.originalText = this.props.text;
    this.state = {
      text: this.originalText
    };
  }

  componentDidMount() {
    let stopper = `${this.originalText}...`;
    this.interval = setInterval(() => {
      if(this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        });
      }
    }, this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
     return(
      <h4>{this.state.text}</h4>
     )
  }
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}