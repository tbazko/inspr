import React, {PropTypes} from 'react'
import WordsWrapper from './WordsWrapper'

function Words(props) {
  let wordsList = props.words.map((words) =>
    <li onClick={props.onSelected} className="btn btn-default btn-lg btn-m15" key={words}>{words}</li>
  )
  return (
    <div>
      <h1>{props.header}</h1>
      <WordsWrapper onRefreshItems={props.onRefresh}>
        {wordsList}
      </WordsWrapper>
    </div>
  )
}

Words.propTypes = {
  words: PropTypes.array.isRequired,
  onSelected: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired
}

export default Words;