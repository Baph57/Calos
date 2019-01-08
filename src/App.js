import React, { Component } from 'react';
import './App.css';
import TopNav from './Comps/TopNav'
import { connect } from "react-redux"
import Main from "./Comps/Main"
import { 
  BrowserRouter as 
  Router, 
  // Route, 
  Switch, 
  // Redirect 
} from 'react-router-dom'


class App extends Component {
  render = () => {
    return (
      <>
      <Router>
        <>
        <TopNav/>
        <Main/>
        <Switch>
        </Switch>
        </>
      </Router>
      </>
    )
  }
}

export default connect(null,null)(App);
