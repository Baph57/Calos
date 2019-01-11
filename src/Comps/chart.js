import React from "react";
import { Line } from "react-chartjs-2";
import {connect} from 'react-redux'


class WeatherChart extends React.Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log(this.props.days.weatherArray,'weatherarray',nextProps,'nextprops',nextState,'nextstate')
//     return nextState.dataLine.datasets[0].data !== this.props.days.weatherArray  
// }
  state = {
    dataLine: {
      labels: ["12am","3am","6am","9am","12pm","3pm","6pm","9pm"],
      datasets: [
        {
          label: "Weather For Selected Day",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.days.weatherArray
        }
      ]
    }
  }

render() {
    return (
      <>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </>
    );
  }
}
const mapStateToProps = ({days})=>({days})
export default connect(mapStateToProps,null)(WeatherChart);