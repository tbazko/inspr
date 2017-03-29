import React, {PropTypes} from 'react'
import Loading from './Loading'

function Home(props) {
  return props.isLoading === true
  ? <Loading speed={300} text="Loading" />
  : <div key="home" className="col-sm-8 col-sm-offset-2 text-center col-vcenter">
      <h1>Lack of drawing ideas?</h1>
      <p className="lead">Gather up words to create a topic which will wind up your thoughts!</p>
      <button className="btn btn-primary btn-lg" onClick={props.onStart}>Start with random</button>
      <h3>or</h3>
      <div className="col-sm-6 col-sm-offset-3">
        <form action="" onSubmit={props.onSubmitTopic} className="form-horizontal">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter topic" value={props.topic} onChange={props.onUpdateTopic} />
          </div>
          <div className="form-group">
            <button className="btn btn-default btn-lg" type="submit">Start with given noun</button>
          </div>
        </form>
      </div>
    </div>
}

Home.PropTypes = {
  topic: PropTypes.string.isRequired,
  onUpdateTopic: PropTypes.func.isRequired,
  onSubmitTopic: PropTypes.func.isRequired
}

export default Home