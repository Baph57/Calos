import React from 'react';
import onClick from "../Redux/Axions/onclick"
import {connect} from "react-redux"
import "./styles/Upload.css"

class Upload extends React.Component  {
  _onSubmit =e=> {
    e.preventDefault()
    // console.log(this)
    this.props.onClick(this.FileList[0])
  }
  render() {
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
      onSubmit={this._onSubmit}
    />
    <label className="custom-file-label" htmlFor="inputGroupFile01">
      Choose file
    </label>
  </div>
</div>
    );
  }
};

const mapDispatchToProps=dispatch=>({
  _onSubmit: log=>{
    dispatch(onClick(log))
  }
})
export default connect(mapDispatchToProps,null)(Upload);