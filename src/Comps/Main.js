import React, { Component } from 'react';
// import SideNav from "./SideNav"
import TestSideNav from "./TestSideNav"
import { connect } from "react-redux"
// import Calendar from 'react-calendar'
import Calendar from './react-calendar/src/entry'
import Upload from './Upload'
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact'
import "./styles/Main.css"
// import receiveWeather from "../Redux/Axions/receiveweather"
class Main extends Component {
    componentDidMount = () => {
        // this.props.receiveWeather();
    }
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
            <Calendar/>
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
// const mapDispatchToProps = dispatch => ({
//     receiveWeather: () => {
//         dispatch(receiveWeather());
//     }
// })
export default connect(mapStateToProps,null)(Main);
