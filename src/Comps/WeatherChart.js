import React from "react";
import {connect} from 'react-redux'
import { Line } from "react-chartjs-2";
import { MDBContainer, MDBBtn } from "mdbreact";
import updateWeather from "../Redux/Axions/updateWeather"

class WeatherChart extends React.Component {
  // _updateFunc=()=>{this.props.updateWeather}
  state = {
  }
  
  render() {
    // setTimeout(()=>{this.forceUpdate()}, 5000)
    // setTimeout(()=>{
      //   let omgArray = []
      //   if(this.props.days.weather.list.length !== undefined){ 
        //   console.log(omgArray,'props of weatherchart')
        //   this.props.days.weather.list.map(x=>{
          //     if(x.dt_txt.slice(0,10)===this.props.days.dateForChart){return omgArray.push(x), this.state.dataLine.datasets[0].data.push(x.main.temp_max), console.log(omgArray,"OMG",this.accArr,"ACCARR")}else{}
          //   })}else{return console.log('please wait!')}}, 1000)
    // let maxTempArrayHelper = this.props.days.chartArray.main.temp_max.push(this.maxTempArray)
    if(!this.props.days.weatherArray)return null
    console.log(this.props.days.weatherArray,'weatherarray')
    console.log(this.props.days.chartData, 'state of chart')
    return (
      <>
      <MDBContainer>
        <h3 className="mt-5">Line chart</h3>
        <Line data={this.props.days.chartData.dataLine} options={{ responsive: true }} />
      </MDBContainer>
      <MDBBtn onClick={this.props.updateWeather}/>
      </>
    );
  }
}
const mapStateToProps = ({days, weather}) => ({days,weather})
export default connect(mapStateToProps,{updateWeather})(WeatherChart)