import React, {PropTypes} from 'react'
import Words from '../components/Words'
import ItemsRandomizer from '../services/ItemsRandomizer'
import dictionaryAPI from '../utils/dictionaryAPI'
import helpers from '../utils/DOMhelpers'

export default class WordsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    }
    this.randomWords = null;
    this.synonyms = null;
  }

  render() {
    return(
      <Words
        words={this.state.words}
        header={this.props.header}
        onSelected={this.handleSelected.bind(this)}
        onRefresh={this.handleRefresh.bind(this)}
       />
     )
  }

  componentDidMount() {
    this.getWordsFromApi();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.baseWord !== nextProps.baseWord) {
      this.getWordsFromApi(nextProps.baseWord);
    }
  }

  changeWordToSimilar() {
    let synonymsPromise;
    if(this.synonyms && this.synonyms.remaining.length > 0) {
      this.getWordsFromApi(this.synonyms.getRandom(1)[0].word);
    } else {
      dictionaryAPI.getSimilarMeanings(this.currentWord).then((response) => {
        this.synonyms = new ItemsRandomizer(response.data);
        this.getWordsFromApi(this.synonyms.getRandom(1)[0].word);
      });
    }
  }

  getWordsFromApi(word) {
    word = word || this.props.baseWord;
    this.currentWord = this.props.baseWord;
    this.props.getWordPromise(word)
      .then(this._validatedResponse.bind(this))
      .then(this.renderRandomWords.bind(this))
      .catch(this.errorHandler.bind(this));
  }

  _validatedResponse(response) {
    this.response = response;
    if(response.data.length >= this.props.wordsAmount) {
      return response;
    } else {
      throw 'EmptyResponse';
    }
  }

  errorHandler(err) {
    console.warn(`Error in getWordsFromApi: ${err}`);
    if(err === 'EmptyResponse') {
      this.changeWordToSimilar();
    }
  }

  renderRandomWords(response) {
    let words = this.responseToArrayOfWords(response);
    this.randomWords = new ItemsRandomizer(words);
    this.setState({
      words: this.randomWords.getRandom(this.props.wordsAmount)
    })
  }

  handleSelected(e) {
    this.updateClassNames(e.target);
    this.props.onWordSelected(e.target.innerText);
  }

  handleRefresh(e) {
    if(this.randomWords.remaining < this.props.wordsAmount) {
      if(this.props.random) {
        return this.getWordsFromApi();
      } else {
        this.randomWords.reset();
      }
    }
    this.setState({
      words: this.randomWords.getRandom(this.props.wordsAmount)
    })
  }

  responseToArrayOfWords(response) {
    let words = [];
    response.data.reduce((prev, current) => {
      words.push(current.word);
      return;
    }, '');
    return words;
  }

  updateClassNames(el) {
    var siblings = el.parentNode.children;
    for(var i = 0; i < siblings.length; i++) {
      helpers.removeClass(siblings[i], 'active');
      helpers.removeClass(siblings[i], 'btn-success');
    }
    helpers.addClass(el, 'btn-success');
    helpers.addClass(el, 'active');
  }
}

WordsContainer.propTypes = {
  baseWord: PropTypes.string,
  random: PropTypes.bool,
  header: PropTypes.string,
  onWordSelected: PropTypes.func.isRequired,
  getWordPromise: PropTypes.func.isRequired
}

WordsContainer.defaultProps = {
  wordsAmount: 3,
  baseWord: '',
  random: false
}