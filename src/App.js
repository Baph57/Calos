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
import receiveWeather from "./Redux/Axions/receiveweather"
// import updateWeather from './Redux/Axions/updateWeather';
class App extends Component {
  componentDidMount=()=>{
    this.props.receiveWeather()
    // this.props.updateWeather()
  }
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
const mapStateToProps = ({days}) => ({days})
export default connect(mapStateToProps,{receiveWeather})(App);
