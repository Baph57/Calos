// import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


class weatherChart extends React.Component{
  render(){
    const yup = this.props.days.list.map(x=>x.main.temp)
  return (
    <div>
      <Sparklines height={120} width={180} data={yup}>
        <SparklinesLine color={"orange"} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
    </div>
  )
  }}
  const mapStateToProps = ({days}) => ({days})
  export default connect(mapStateToProps)(weatherChart)
