import React, {Component} from "react";
import {connect} from 'react-redux'
import updateWeather from "../Redux/Axions/updateWeather"

import {Bar} from 'react-chartjs-2';
// import color from 'rcolor';

class WeatherChart extends Component{
  initialState = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
		label: 'My First dataset',
		backgroundColor: 'rgba(255,99,132,0.2)',
		borderColor: 'rgba(255,99,132,1)',
		borderWidth: 1,
		hoverBackgroundColor: 'rgba(255,99,132,0.4)',
		hoverBorderColor: 'rgba(255,99,132,1)',
		data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
}
	componentWillMount(){
		this.setState(this.initialState);
	}
	componentDidMount(){

		var _this = this;

		setInterval(function(){
			var oldDataSet = _this.state.datasets[0];
			var newData = [];

			for(var x=0; x< _this.state.labels.length; x++){
				newData.push(Math.floor(Math.random() * 100));
			}

			var newDataSet = {
				...oldDataSet
			};

			newDataSet.data = newData;
			newDataSet.backgroundColor = 'rgba(255,99,132,1)';
			newDataSet.borderColor = 'rgba(255,99,132,1)';
			newDataSet.hoverBackgroundColor = 'rgba(255,99,132,1)';
			newDataSet.hoverBorderColor = 'rgba(255,99,132,1)';

			var newState = {
				...this.initialState,
				datasets: [newDataSet]
			};

			_this.setState(newState);
		}, 5000);
	}
	render() {
		return (
      <>
			<Bar data={this.state} />
      <h2>You can even make crazy graphs like this!</h2>
      <WeatherChart />
    </>
		);
	}
}

const mapStateToProps = ({days, weather}) => ({days,weather})
export default connect(mapStateToProps,{updateWeather})(WeatherChart)