import React, {Component} from 'react';
import {connect} from "react-redux"
import { MDBDataTable,MDBBtn} from 'mdbreact';
import "./styles/SideNav.css"

class SideNav extends Component{
  consoleLog =()=>{console.log(this.props)}
  render=()=>{
  const rowz = this.props.days.objToShip.length ?
    this.props.days.objToShip.map(row=>
      ({
        title: row.objToShip.title,
        description: row.objToShip.description,
        startDate: row.objToShip.date
      })
    ) : ''
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
        field: 'startDate',
        sort: 'asc',
        width: 200
      }
    ],
    rows: rowz
  };

  return (
    <>
        <MDBBtn onClick={this.consoleLog}>consolelogprops</MDBBtn>
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
const mapStateToProps = ({days, objToShip}) => ({days, objToShip})
export default connect(mapStateToProps,null)(SideNav);