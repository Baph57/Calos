import React, {Component} from 'react';
import {connect} from "react-redux"
import { MDBDataTable, MDBBtn, MDBInput } from 'mdbreact';
import "./styles/SideNav.css"


class TestSideNav extends Component{
  componentDidMount = () => {console.log(this.props)}
  render = () => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'input',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Office',
        field: 'office',
        sort: 'asc',
        width: 200
    },
    {
        label: 'Start date',
        field: 'date',
        sort: 'asc',
        width: 150
    },
      {
        label: 'Increment',
        field: 'increment',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Decrement',
        field: 'decrement',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        name: <MDBInput size="sm" style={{margin: "0px !important", height: "5px"}}/>,
        position: <MDBInput size="sm" style={{margin: "0px !important", height: "5px"}}/>,
        office: <MDBInput size="sm" style={{margin: "0px !important", height: "5px"}}/>,
        date: <MDBInput size="sm" style={{margin: "0px !important", height: "5px"}}/>,
        increment: <MDBBtn/>,
        decrement: <MDBBtn/>
      }
    ]
  }

  return (
    <MDBDataTable
        className="SideNav"
        striped
        bordered
        hover
        data={data}
    />
  );
}}
const mapStateToProps = ({days}) => ({days})
export default connect(null,mapStateToProps)(TestSideNav);