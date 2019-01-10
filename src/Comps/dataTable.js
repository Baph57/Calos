import React, {Component} from 'react';
import { Table, TableBody, TableHead  } from 'mdbreact';
import {connect} from 'react-redux'
// import TableRow from './TableRow'

class DataTable extends Component {

    render=()=>{
        // const rowz = this.props.days.objToShip.length ?
        // this.props.days.objToShip.map(row=>(
        // <TableRow
        // info={row}
        // />
        // )) : ''
        console.log(this.props, 'props table')
  return (
      <>
    <Table hover>
      <TableHead>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
      </TableHead>
      <TableBody>
        {/* {rowz} */}
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </TableBody>
    </Table>
    </>
  );
}}

const mapStateToProps = ({days, objToShip}) => ({days,objToShip})
export default connect(mapStateToProps,null)(DataTable)