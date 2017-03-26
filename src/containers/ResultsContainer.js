import React, {PropTypes} from 'react'
import Results from '../components/Results'
import dictionaryAPI from '../utils/dictionaryAPI'
import ItemsRandomizer from '../services/ItemsRandomizer'
import TextGenerator from '../services/TextGenerator'

export default class ResultsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      relatedWord: this.props.location.state.relatedWord,
      topic: this.props.location.state.topic,
      adjective: this.props.location.state.adjective,
      sentence: ''
    }
  }

  render() {
     return(
      <Results {...this.state} onRefresh={this.handleRefresh.bind(this)} />
     )
  }

  componentDidMount() {
    this.generateAnIdea();
  }

  handleRefresh() {
    this.setState({
      isLoading: true
    });
    this.generateAnIdea();
  }

  generateAnIdea() {
    let text = new TextGenerator();
    text.mainTopic = this.props.match.params.topicId;
    text.derivedTopic = this.state.topic;
    text.adjective = this.state.adjective;
    text.relatedWord = this.state.relatedWord;
    let sentence = text.generate().then((sentence) => {
      this.setState({
        sentence: sentence,
        isLoading: false
      });
    });
  }
}