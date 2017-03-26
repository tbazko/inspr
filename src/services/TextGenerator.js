'use strict';
import dictionaryAPI from '../utils/dictionaryAPI'
import ItemsRandomizer from './ItemsRandomizer'

export default class TextGenerator {
  constructor() {
    this.mainTopic = null;
    this.derivedTopic = null;
    this.adjective = null;
    this.relatedWord = null;
  }

  generate() {
    var predcessor = dictionaryAPI.getFrequentPredcessors(this.relatedWord, this.derivedTopic);
    var follower = dictionaryAPI.getFrequentFollowers(this.relatedWord, this.derivedTopic);
    var verb = dictionaryAPI.getRandomVerb();
    var preposition = dictionaryAPI.getRandomPreposition();
    var afterPrepositionWords = dictionaryAPI.getFrequentFollowers(this.relatedWord, this.mainTopic);

    return Promise.all([predcessor, follower, verb, preposition, afterPrepositionWords])
      .then(this._generateText.bind(this));
  }

  _generateText(response) {
    this._parseResponse(response);
    return this._constructSentence();
  }

  _parseResponse(response) {
    var predcessors, followers, verb, preposition, afterPrepositionWords;
      [predcessors, followers, verb, preposition, afterPrepositionWords] = response;
      this.predcessor = this._setPredcessor(predcessors);
      this.follower = this._setFollower(followers);
      this.afterPreposition = this._setAfterPreposition(afterPrepositionWords);
      this.verb = verb.data.word;
      this.preposition = preposition.data.word;
  }

  _setPredcessor(predcessors) {
    var randomPredcessors = new ItemsRandomizer(predcessors.data);
    var predcessor = randomPredcessors.getRandom(1)[0].word;
    return predcessor.charAt(0).toUpperCase() + predcessor.slice(1);
  }

  _setFollower(followers) {
    var randomFollowers = new ItemsRandomizer(followers.data);
    return randomFollowers.getRandom(1)[0].word;
  }

  _setAfterPreposition(afterPrepositionWords) {
    var randomAfterPrep = new ItemsRandomizer(afterPrepositionWords.data);
    return randomAfterPrep.getRandom(1)[0].word;
  }

  _constructSentence() {
    return `${this.predcessor} ${this.relatedWord} ${this.verb} ${this.adjective} ${this.derivedTopic} ${this.mainTopic} ${this.preposition} ${this.afterPreposition}`;
  }
}