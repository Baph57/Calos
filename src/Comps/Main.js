import React, { Component } from 'react';
// import SideNav from "./SideNav"
import TestSideNav from "./TestSideNav"
import SideNav from "./SideNav"
import { connect } from "react-redux"
import Calendar from 'react-calendar'
import Upload from './Upload'
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact'
import "./styles/Main.css"
// import receiveWeather from "../Redux/Axions/receiveweather"
import kamikaze from "../Redux/Axions/calendar"
// import Ugh from "./Ugh"
import CheckLoadedApp from "./datacheck"
// import DataTable from "./dataTable"
class Main extends Component {
    state = {
        date: new Date(),
    }
    onChange = date => this.props.kamikaze({date})
    render = () => {
        return (
        <>
            <MDBContainer>
            <MDBRow>
            <MDBCol 
            size="6">
            <SideNav/>
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
            <MDBRow>
                <MDBCol size="6">
                    <TestSideNav/>
                </MDBCol>
                <MDBCol size='6'>
                <CheckLoadedApp/>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </>
        )
    }
}
const mapStateToProps = ({days, objToShip}) => ({
    days, objToShip
})
// // const mapDispatchToProps = dispatch => ({
//     receiveWeather: () => {
//         dispatch(receiveWeather());
//     // },
//     kamikaze: value =>{
//         dispatch(kamikaze(value))
//     }
// })   
// export default connect(mapStateToProps,mapDispatchToProps)(Main);
export default connect(mapStateToProps, {kamikaze})(Main);
/*    componentDidMount = async() => {
        try{
        this.props.receiveWeather()
        this.props.correctEpochTime()
        }
        catch(e){console.log(e)}
    }*/