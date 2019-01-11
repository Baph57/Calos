import React, { Component } from 'react';
import { connect } from "react-redux"
import {MDBBtn} from 'mdbreact'
// import receiveWeather from "./Redux/Axions/receiveweather"

class Incrementer extends Component {

  render = () => {
    return (
      <>
      <MDBBtn ></MDBBtn>
      </>
    )
  }
}
const mapStateToProps = ({days}) => ({days})
export default connect(mapStateToProps,null)(Incrementer);
