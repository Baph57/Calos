import React, { Component } from 'react';
// import SideNav from "./SideNav"
import TestSideNav from "./TestSideNav"
import { connect } from "react-redux"
import Calendar from 'react-calendar'
import Upload from './Upload'
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact'
import "./styles/Main.css"
import receiveWeather from "../Redux/Axions/receiveweather"
import kamikaze from "../Redux/Axions/calendar"
class Main extends Component {
    state = {
        date: new Date(),
    }
    // componentDidUpdate = () => {
    //     this.props.kamikaze(this.state.date)
    // }
    onChange = date => this.props.kamikaze({date})
    render = () => {
        return (
        <>
            <MDBContainer>
            <MDBRow>
            <MDBCol 
            size="6">
            <TestSideNav/>
            {/* <SideNav/> */}
            </MDBCol>
            <MDBCol 
            size="6"
            id="CalCon">
            <Calendar
            onChange={this.onChange}
            value={this.state.date}/>
            <Upload/>
            </MDBCol>
            </MDBRow>
            </MDBContainer>
        </>
        )
    }
}
const mapStateToProps = ({days}) => ({
    days
})
const mapDispatchToProps = dispatch => ({
    receiveWeather: () => {
        dispatch(receiveWeather());
    },
    kamikaze: value =>{
        dispatch(kamikaze(value))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Main);
