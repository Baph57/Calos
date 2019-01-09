import React, {Component} from 'react';
import {connect} from "react-redux"
import { MDBDataTable, MDBBtn, MDBInput } from 'mdbreact';
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
      date: moment(this.props.days.date).format('MMMM Do YYYY, h:mm:ss a')
    }
  }
  consoleLog = () =>{console.log(typeof this.props.days.date,this.props.days.date.toDateString())}
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
  render = () => {
  //   var trackersObj = {}
  // const trackers = this.trackersObj.length ? this.trackersObj.map(x=>
  //   trackersObj = [...this.state], this.state) : null
  const data = {
    columns: [
      {
        label: 'Title',
        field: 'input',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Description',
        field: 'position',
        sort: 'asc',
        width: 470
      },
    {
        label: 'Start date',
        field: 'date',
        sort: 'asc',
        width: 200
    },
      {
        label: 'Increment',
        field: 'increment',
        sort: 'asc',
        width: 80
      },
      {
        label: 'Decrement',
        field: 'decrement',
        sort: 'asc',
        width: 80
      }
    ],
    rows: [
      {
        // title: <MDBInput value={this.state.objToShip["title"]} onChange={this._onChange.bind(this)} name='title' size="sm" style={{margin: "0px !important", height: "5px"}}/>,
        // description: <MDBInput value={this.state.objToShip["description"]} onChange={this._onChange.bind(this)} name='description' size="sm" style={{margin: "0px !important", height: "5px"}}/>,
        // date: <MDBInput onChange={this.state.date = moment(this.props.days.date).format('MMMM Do YYYY, h:mm:ss a')} size="sm" name='startDate' value={moment(this.props.days.date).format('MMMM Do YYYY, h:mm:ss a')} style={{margin: "0px !important", height: "5px"}}/>,
        // increment: <MDBBtn onClick={this.newRow}/>,
        // decrement: <MDBBtn />
      },
      this.props.days.length ? this.props.days.objToShip : {}
    ]
  }

  return (
    <>
<MDBInput value={this.state.objToShip["title"]} onChange={this._onChange.bind(this)} name='title' size="sm" style={{margin: "0px !important", height: "5px"}}/>
<MDBInput value={this.state.objToShip["description"]} onChange={this._onChange.bind(this)} name='description' size="sm" style={{margin: "0px !important", height: "5px"}}/>
<MDBInput onChange={this.state.date = moment(this.props.days.date).format('MMMM Do YYYY, h:mm:ss a')} size="sm" name='startDate' value={moment(this.props.days.date).format('MMMM Do YYYY, h:mm:ss a')} style={{margin: "0px !important", height: "5px"}}/>
<MDBBtn onClick={this.newRow} value="Save Object">Save Object</MDBBtn>
<MDBBtn />
    <MDBDataTable
        className="SideNav"
        striped
        bordered
        hover
        data={this.props.days.objToShip}
    />
    {/* <MDBBtn placeholder="Hello" onClick={this.consoleLog}/> */}
    </>
  );
}}
const mapStateToProps = ({days, trackersObj}) => ({days, trackersObj})

// const mapDispatchToProps = dispatch => ({
//   consoleLog: ()
// })
export default connect(mapStateToProps,{newTableRow})(TestSideNav);