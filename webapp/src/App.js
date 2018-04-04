import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'


import pages from './pages'

import './App.css'

const client = new ApolloClient({
  uri: 'http://localhost:9000/graphql'
})

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div style={{ padding: 20 }}>
        <Route exact path='/' component={pages.Home} />
        <Route path='/movies/:id' component={pages.Movie} />
      </div>
    </Router>
  </ApolloProvider>
)

export default App