import React, {PropTypes} from 'react'
import dictionaryAPI from '../utils/dictionaryAPI'
import WordsContainer from './WordsContainer'

export default class TopicAdjustmentsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.providedTopic = this.props.match.params.topicId || false;
    this.state = {
      firstWord: this.providedTopic,
      topic: false,
      adjective: false,
      relatedWord: false
    }
  }

  render() {
    return (
      <div className='col-sm-12 text-center col-vcenter'>
        {this.providedTopic ? null :
          <WordsContainer
            random={true}
            header='Select appealing word or refresh:'
            onWordSelected={this.handleRandomSelected.bind(this)}
            getWordPromise={dictionaryAPI.getRandomWords.bind(dictionaryAPI)} />
        }
        {!this.state.firstWord ? null :
          <WordsContainer
            header={!this.providedTopic ? '' : 'Select appealing word or refresh:'}
            baseWord={this.state.firstWord}
            onWordSelected={this.handleTopicSelected.bind(this)}
            getWordPromise={dictionaryAPI.getRelatedWords.bind(dictionaryAPI)} />}
        {!this.state.topic ? null :
          <WordsContainer
            onWordSelected={this.handleAdjectiveSelected.bind(this)}
            baseWord={this.state.topic}
            getWordPromise={dictionaryAPI.getRelatedAdjectives.bind(dictionaryAPI)} />}
        {!this.state.adjective ? null :
          <WordsContainer
            onWordSelected={this.handleRelatedWordSelected.bind(this)}
            baseWord={this.state.adjective}
            getWordPromise={dictionaryAPI.getRelatedNounToAdjective.bind(dictionaryAPI)} />}
       {!this.state.relatedWord ? null :
        <button type='button' style={{marginTop: '25px'}} className='btn btn-default btn-lg' onClick={this.goToResultsPage.bind(this)}>Show related pictures in google!</button>}
      </div>
    )
  }

  handleRandomSelected(firstWord) {
    this.setState({
      firstWord: firstWord
    });
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
    let url = `https://www.google.nl/search?q=google&espv=2&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiVi7SbgvXSAhWF5xoKHUTgCL8Q_AUIBygC&biw=1280&bih=699#tbm=isch&q=${this.state.topic}+${this.state.adjective}+${this.state.relatedWord}&*`;
    window.open(url, '_blank');
  }
}
