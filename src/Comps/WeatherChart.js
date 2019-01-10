import React from "react";
import {connect} from 'react-redux'
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


class WeatherChart extends React.Component {
  state = {
    dataLine: {
      labels: ["12am","3am","6am","9am","12pm","3pm","6pm","9pm"],
      datasets: [
        {
          label: "Weather For The Day",
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
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "Other Weather",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(218, 0, 0,0.4)",
            borderColor: "rgba(218, 0, 0,1)",
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
            data: [50, 40, 70, 40, 80, 90, 60]
        }
      ]
    }
  }

render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Line chart</h3>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}
const mapStateToProps = ({days, weather}) => ({days,weather})
export default connect(mapStateToProps,null)(WeatherChart)