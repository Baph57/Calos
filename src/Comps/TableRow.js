import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {TableBody} from 'mdbreact'

class TableRow extends Component{
    componentDidMount=()=>{console.log(this.props, 'props in tablerow')}
    
    render=()=>{
        
        return(
            <>
            <tr>
                <td>{this.props.info.objToShip.title}</td>
                <td>{this.props.info.objToShip.description}</td>
                <td>{this.props.info.objToShip.date}</td>
                <td>@mdo</td>
            </tr>
            </>
        )
    }
}
export default connect(null,null)(TableRow)