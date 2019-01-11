import React from 'react';
import {connect} from "react-redux"
import "./styles/Upload.css"
import {MDBBtn} from 'mdbreact'

class Upload extends React.Component  {
  state={}
  // _onSubmit=e=>{this.setState(e.target.files)}
  _onSubmit=e=>{localStorage.setItem("imgzzz", e.target.files)}
  _logStorage=e=>{console.log(localStorage)}
  render() {
    // const test = this.state.length ? <img>{this.state.file}</img> : null
    return(
<div className="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroupFileAddon01">
      Upload
    </span>
  </div>
  <div className="custom-file">
    <input
      type="file"
      className="custom-file-input"
      id="inputGroupFile01"
      aria-describedby="inputGroupFileAddon01"
      onClick={this._onSubmit}
    />
    <label className="custom-file-label" htmlFor="inputGroupFile01">
      Choose file
    </label>
  </div>
  <MDBBtn onClick={this._logStorage}/>
  


</div>
    );
  }
};

export default connect(null,null)(Upload);