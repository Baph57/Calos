import React, {Component} from 'react';
import {connect} from "react-redux"
import { 
  MDBDataTable,
  // MDBBtn
} from 'mdbreact';
import "./styles/SideNav.css"
// import Incrementer from "./Incrementer"

class SideNav extends Component{
  // consoleLog =()=>{console.log(this.props.days.objToShip)}
  // deleteEntry=e=>{}
  render=()=>{
    // var entryCounter = 1
    console.log('asdfdfff', this.props.days.objToShip)
  const rowz = this.props.days.objToShip.length ?
    this.props.days.objToShip.map(row=>({
        title: row.objToShip.title,
        description: row.objToShip.description,
        date: row.objToShip.date,
      })
      ) : ''
      console.log(rowz)
  const data = {
    columns: [
      {
        label: 'Title',
        field: 'title',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Description',
        field: 'description',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Start Date',
        field: 'date',
        sort: 'asc',
        width: 200
      }
    ],
    rows: (rowz)
  };
  return (
    <>
    <MDBDataTable
        className="SideNav"
        striped
        bordered
        hover
        data={data}
    />
    </>
  );
}}
const mapStateToProps = ({days}) => ({days})
export default connect(mapStateToProps,null)(SideNav);