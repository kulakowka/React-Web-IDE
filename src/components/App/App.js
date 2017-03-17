import React, { Component } from 'react'

import FilesContainer from '../../containers/Files'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const NoMatch = () => <div>NoMatch</div>

class App extends Component {
  render () {
    return (
      <Router basename='/React-Web-IDE'>
        <Switch>
          <Route path='/*' component={FilesContainer} />
          <Route path='/' component={FilesContainer} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}

export default App
