import React, {PropTypes} from 'react'

function Results(props) {
  return(
    <div className="col-sm-12 text-center col-vcenter">
      {props.topic}, {props.adjective}, {props.relatedWord}
      <p className="lead">{props.sentence}.
        <button type="button" style={{marginLeft: '15px'}} className="btn btn-success" onClick={props.onRefresh}>
          <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
        </button>
      </p>
    </div>
  )
}

export default Results;