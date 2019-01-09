import React, { Component } from 'react';
import './App.css';
import TopNav from './Comps/TopNav'
import { connect } from "react-redux"
// import Amplify, { Storage } from 'aws-amplify';
// import { withAuthenticator, S3Album } from 'aws-amplify-react';
import Main from "./Comps/Main"
import { 
  BrowserRouter as 
  Router, 
  // Route, 
  Switch, 
  // Redirect 
} from 'react-router-dom'


class App extends Component {
  // state={}
  // uploadFile = (evt) => {
  // const file = evt.target.files[0];
  // const name = file.name;

  // Storage.put(name, file).then(() => {
  //   this.setState({ file: name });
  //   })
  // }
  render = () => {
    return (
      <>
      <Router>
        <>
        <TopNav/>
        <Main/>
        {/* <input type="file" onChange={this.uploadFile} />
        <S3Album level="private" path='' /> */}
        <Switch>
        </Switch>
        </>
      </Router>
      </>
    )
  }
}

export default connect(null,null)(App);
