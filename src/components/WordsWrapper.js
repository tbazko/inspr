import React, {PropTypes} from 'react'


function WordsWrapper(props) {
  return ( <ul className="list-unstyled text-center">
      {props.children}
      <li className="btn">
        <button type="button" className="btn btn-success btn" onClick={props.onRefreshItems}>
          <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
        </button>
      </li>
    </ul>
  )
}

export default WordsWrapper;