import React, {Component} from 'react';
import {connect} from "react-redux"
import { MDBBtn, MDBInput } from 'mdbreact';
import "./styles/SideNav.css"
import moment from 'moment'
import newTableRow from "../Redux/Axions/newTableRow"


class TestSideNav extends Component{
  state={
    // title: '',
    // description:'',
    // startDate:'',
    // increment:'',
    // decrement:''
    objToShip:{
      date: this.props.days.currentDate
    }
  }
  consoleLog = () =>{console.log(this.props)}
  componentDidMount = () => {console.log(this.props)}
  // correctDate=()=>{ return this.props.days.date}
  newRow = () =>{this.props.newTableRow(this.state)
    //  this.state ={ date: moment(this.props.days.date).format('MMMM Do YYYY, h:mm:ss a')}
    }
  _onChange=e=>{
        e.preventDefault();
        let objToShip = this.state.objToShip;
        let name = e.target.name;
        let value = e.target.value;
        objToShip[name] = value;

        this.setState({objToShip})
  }
  render = () =>{
  return (
    <>
<MDBInput label={'Title'}value={this.state.objToShip["title"]} onChange={this._onChange.bind(this)} name='title' size="sm" style={{margin: "0px !important"}}/>
<MDBInput label={'Description'}value={this.state.objToShip["description"]} onChange={this._onChange.bind(this)} name='description' size="sm" style={{margin: "0px !important"}}/>
<MDBInput size="sm" name='startDate' label={"Date: " + this.props.days.currentDate} style={{margin: "0px !important"}}/>
<MDBBtn onClick={this.newRow} value="Save Object">Save Object</MDBBtn>
<MDBBtn onClick={this.consoleLog}>Consolelog props </MDBBtn>
    </>
  );
}}
const mapStateToProps = ({days}) => ({days})

// const mapDispatchToProps = dispatch => ({
//   consoleLog: ()
// })
export default connect(mapStateToProps,{newTableRow})(TestSideNav);