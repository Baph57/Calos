import React from 'react';
import {connect} from "react-redux"
import "./styles/Upload.css"

class Upload extends React.Component  {
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

export default connect(null,null)(Upload);