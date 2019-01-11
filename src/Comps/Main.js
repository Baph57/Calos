import React, { Component } from "react";
// import SideNav from "./SideNav"
import TestSideNav from "./TestSideNav";
import SideNav from "./SideNav";
import { connect } from "react-redux";
import Calendar from "react-calendar";
// import Upload from './Upload'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./styles/Main.css";
// import receiveWeather from "../Redux/Axions/receiveweather"
import kamikaze from "../Redux/Axions/calendar";
import Chart from "./Chart";

class Main extends Component {
  state = {
    date: new Date()
  };
  onChange = date => this.props.kamikaze({ date });
  render = () => {
    const contentCheck = this.props.days.objToShip.length ? <SideNav /> : null;
    const contentCheck2 = this.props.days.weatherArray.length ? (
      <Chart />
    ) : null;
    return (
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="6">{contentCheck}</MDBCol>
            <MDBCol size="6" id="CalCon">
              <TestSideNav />
              <Calendar onChange={this.onChange} value={this.state.date} />
              {/* <Upload/> */}
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="6" />
            <MDBCol size="6">{contentCheck2}</MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  };
}
const mapStateToProps = ({ days }) => ({
  days
});
// // const mapDispatchToProps = dispatch => ({
//     receiveWeather: () => {
//         dispatch(receiveWeather());
//     // },
//     kamikaze: value =>{
//         dispatch(kamikaze(value))
//     }
// })
// export default connect(mapStateToProps,mapDispatchToProps)(Main);
export default connect(
  mapStateToProps,
  { kamikaze }
)(Main);
/*    componentDidMount = async() => {
        try{
        this.props.receiveWeather()
        this.props.correctEpochTime()
        }
        catch(e){console.log(e)}
    }*/
