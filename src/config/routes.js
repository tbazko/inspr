import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Main from '../components/Main'
import HomeContainer from '../containers/HomeContainer'
import ResultsContainer from '../containers/ResultsContainer'
import TopicAdjustmentsContainer from '../containers/TopicAdjustmentsContainer'

const routes = (
  <Router>
    <Main>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/:topicId" component={TopicAdjustmentsContainer} />
      <Route exact path="/:topicId/results" component={ResultsContainer} />
    </Main>
  </Router>
)

export default routes;