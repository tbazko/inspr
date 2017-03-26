'use strict';
import axios from 'axios'

class DictionaryAPI {
  constructor() {
    this.baseUrl = `https://api.datamuse.com/words`;
  }

  getRelatedWords(word) {
    let wordEncoded = encodeURIComponent(word);
    return axios.get(`${this.baseUrl}?topics=${wordEncoded}&max=100`);
  }

  getRelatedAdjectives(word) {
    let wordEncoded = encodeURIComponent(word);
    return axios.get(`${this.baseUrl}?rel_jjb=${wordEncoded}&max=100`);
  }

  getSimilarMeanings(word) {
    let wordEncoded = encodeURIComponent(word);
    return axios.get(`${this.baseUrl}?ml=${wordEncoded}&max=10`);
  }

  getRelatedNounToAdjective(adjective) {
    let wordEncoded = encodeURIComponent(adjective);
    return axios.get(`${this.baseUrl}?rel_jja=${wordEncoded}&max=100`);
  }

  getWordsWithProvidedContextOnRight(wordAsRightContext) {
    let wordEncoded = encodeURIComponent(wordAsRightContext);
    return axios.get(`${this.baseUrl}?rc=${wordEncoded}&max=100&md=p`);
  }

  getWordsWithProvidedContextOnLeft(wordAsLeftContext) {
    let wordEncoded = encodeURIComponent(wordAsLeftContext);
    return axios.get(`${this.baseUrl}?rc=${wordEncoded}&max=100&md=p`);
  }

  getFrequentPredcessors(word, topic) {
    let wordEncoded = encodeURIComponent(word);
    let topicEncoded = encodeURIComponent(topic);
    return axios.get(`${this.baseUrl}?rel_bga=${wordEncoded}&topics=${topicEncoded}&max=100&md=p`);
  }

  getFrequentFollowers(word, topic) {
    let wordEncoded = encodeURIComponent(word);
    let topicEncoded = encodeURIComponent(topic);
    return axios.get(`${this.baseUrl}?rel_bgb=${wordEncoded}&topics=${topicEncoded}&max=100&md=p`);
  }

  getRandomVerb() {
    return axios.get(`http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=verb&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&minCorpusCount=400000&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`);
  }

  getRandomPreposition() {
    return axios.get(`http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=preposition&minCorpusCount=300000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`);
  }

}

let dictionaryAPI;

if(!dictionaryAPI) {
  dictionaryAPI = new DictionaryAPI();
}

export default dictionaryAPI;

