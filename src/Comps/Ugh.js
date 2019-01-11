import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from './chart';


class WeatherList extends Component {
    halp = this.props.days.weather
  renderWeather(halp) {
    if(halp===undefined){return(<h3>You a boujee bitch</h3>);}
    else{
      // const lat = cityData.city.coord.lat;
      // const lon = cityData.city.coord.lon;
      const temps = halp.map(halp.list.map(weather => weather.main.temp), (temp) => temp - 273.15);
    //   const pressures = halp.list.map(weather => weather.main.pressure);
    //   const humidities = halp.list.map(weather => weather.main.humidity);

      return (
        <tr key={'Weather'}>
          <td><Chart data={temps} color="orange" units="C" /></td>
          {/* <td><Chart data={pressures} color="green" units="hPa" /></td> */}
          {/* <td><Chart data={humidities} color="black" units="%" /></td> */}
        </tr>
      );
    }

  }

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.days.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}



// function mapStateToProps(state) {
//   return { weather: state.weather };
// }
// ES6
const mapStateToProps =({ days }) =>({days})

export default connect(mapStateToProps)(WeatherList);
