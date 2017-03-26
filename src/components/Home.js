import React, {PropTypes} from 'react'

function Home(props) {
  return(
    <div className="col-sm-8 col-sm-offset-2 text-center col-vcenter">
      <h1>
        Creative block?
        <p><small>get some random ideas for your next piece</small></p>
      </h1>

      <h5>Enter some topic (just 1-2 nouns, works best):</h5>
      <div className="col-sm-10 col-sm-offset-1">
        <form action="" onSubmit={props.onSubmitTopic} className="form-horizontal">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter topic" value={props.topic} onChange={props.onUpdateTopic} />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Continue</button>
          </div>
        </form>
      </div>
    </div>
  )
}

Home.PropTypes = {
  topic: PropTypes.string.isRequired,
  onUpdateTopic: PropTypes.func.isRequired,
  onSubmitTopic: PropTypes.func.isRequired
}

export default Home