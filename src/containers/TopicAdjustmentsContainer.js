import React, {PropTypes} from 'react'
import dictionaryAPI from '../utils/dictionaryAPI'
import WordsContainer from './WordsContainer'

export default class TopicAdjustmentsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adjective: false,
      topic: false,
      relatedWord: false
    }
  }

  render() {
    return (
      <div className="col-sm-12 text-center col-vcenter">
        <WordsContainer
          header="Select appealing word:"
          baseWord={this.props.match.params.topicId}
          onWordSelected={this.handleTopicSelected.bind(this)}
          getWordPromise={dictionaryAPI.getRelatedWords.bind(dictionaryAPI)} />
        {!this.state.topic ? null :
          <WordsContainer
            header="add some description:"
            onWordSelected={this.handleAdjectiveSelected.bind(this)}
            baseWord={this.state.topic}
            getWordPromise={dictionaryAPI.getRelatedAdjectives.bind(dictionaryAPI)} />}
        {!this.state.adjective ? null :
          <WordsContainer
            header="and something related:"
            onWordSelected={this.handleRelatedWordSelected.bind(this)}
            baseWord={this.state.adjective}
            getWordPromise={dictionaryAPI.getRelatedNounToAdjective.bind(dictionaryAPI)} />}
       {!this.state.relatedWord ? null :
        <button type="button" className="btn btn-default" onClick={this.goToResultsPage.bind(this)}>Generate!</button>}
      </div>
    )
  }

  handleTopicSelected(topic) {
    this.setState({
      topic: topic
    });
  }

  handleAdjectiveSelected(adjective) {
    this.setState({
      adjective: adjective
    });
  }

  handleRelatedWordSelected(relatedWord) {
    this.setState({
      relatedWord: relatedWord
    });
  }

  goToResultsPage() {
    this.props.history.push({
      pathname: `${this.props.match.url}/results`,
      state: {
        topic: this.state.topic,
        adjective: this.state.adjective,
        relatedWord: this.state.relatedWord
      }
    });
  }
}
