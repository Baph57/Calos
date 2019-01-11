import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBBtn,
  MDBInput
  // MDBIcon
} from "mdbreact";
import "./styles/SideNav.css";
import newTableRow from "../Redux/Axions/newTableRow";

class TestSideNav extends Component {
  state = {
    // title: '',
    // description:'',
    // startDate:'',
    // increment:'',
    // decrement:''
    objToShip: {
      date: this.props.days.currentDate
    }
  };
  consoleLog = () => {
    console.log(this.props);
  };
  componentDidMount = () => {
    console.log(this.props, "onMount", this.state);
  };
  // correctDate=()=>{ return this.props.days.date}
  newRow = () => {
    this.props.newTableRow({
      ...this.state,
      objToShip: {
        ...this.state.objToShip,
        date: this.props.days.currentDate
      }
    });
    //  this.state ={ date: moment(this.props.days.date).format('MMMM Do YYYY, h:mm:ss a')}
  };
  // isValueTracker = () =>{return !this.state.objToShip.valueTracker}
  _onChange = e => {
    e.preventDefault();
    let objToShip = this.state.objToShip;
    let name = e.target.name;
    let value = e.target.value;
    objToShip[name] = value;
    console.log(this.state, "state in change func");
    // objToShip.id = this.props.days.objToShip.length
    this.setState({objToShip})
  };
  render = () => {
    // this.setState(idCount: idCount++)
    // console.log('mitch', this.props.days.currentDate)
    // console.log(this.state, "leeeeeength");
    return (
      <>
        <MDBInput
          label={"Title"}
          value={this.state.objToShip["title"]}
          onChange={this._onChange.bind(this)}
          name="title"
          size="sm"
          style={{ margin: "0px !important" }}
        />
        <MDBInput
          label={"Description"}
          value={this.state.objToShip["description"]}
          onChange={this._onChange.bind(this)}
          name="description"
          size="sm"
          style={{ margin: "0px !important" }}
        />
        <MDBInput
          size="sm"
          disabled
          name="date"
          label={this.props.days.currentDate}
          style={{ margin: "0px !important" }}
        />
        <MDBBtn onClick={this.newRow} value="Save Object">
          Save Object
        </MDBBtn>
        {/* <MDBBtn onClick={this.isValueTracker}></MDBBtn> */}
        {/* <MDBIcon icon="square" /> */}
      </>
    );
  };
}
const mapStateToProps = ({ days }) => ({ days });

// const mapDispatchToProps = dispatch => ({
//   consoleLog: ()
// })
export default connect(
  mapStateToProps,
  { newTableRow }
)(TestSideNav);
