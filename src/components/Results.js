import React, {PropTypes} from 'react'
import Loading from './Loading'

function Results(props) {
  return props.isLoading === true
  ? <Loading speed={300} text="Thinking" />
  :
    <div className="col-sm-12 text-center col-vcenter">
      <p className="lead">{props.sentence}
        <button type="button" style={{marginLeft: '15px'}} className="btn btn-success" onClick={props.onRefresh}>
          <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
        </button>
      </p>
    </div>

}

export default Results;