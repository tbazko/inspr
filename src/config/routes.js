import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Main from '../components/Main'
import HomeContainer from '../containers/HomeContainer'
import TopicAdjustmentsContainer from '../containers/TopicAdjustmentsContainer'

const routes = (
  <Router>
    <Main>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/generator" component={TopicAdjustmentsContainer} />
      <Route exact path="/generator/:topicId" component={TopicAdjustmentsContainer} />
    </Main>
  </Router>
)

export default routes;