// Step 1 - Including react
import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
// Step 2 - Including the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Step 3 - Including the fusioncharts library
import FusionCharts from 'fusioncharts';

// Step 4 - Including the chart type
import Column2D from 'fusioncharts/fusioncharts.charts';

// Step 5 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 6 - Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// Step 7 - Creating the JSON object to store the chart configurations
// if(!this.props.days.currentWeather){setTimeout({},3000)}

const chartConfigs = {
    type: 'line',// The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        // Chart Configuration
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion",
        },
        // Chart Data
        "data": [{
            "label": "Venezuela",
            "value": this.props.days.currentWeather.main.temp 
        }, {
            "label": "Saudi",
            "value": "260"
        }, {
            "label": "Canada",
            "value": "180"
        }, {
            "label": "Iran",
            "value": "140"
        }, {
            "label": "Russia",
            "value": "115"
        }, {
            "label": "UAE",
            "value": "100"
        }, {
            "label": "US",
            "value": "30"
        }, {
            "label": "China",
            "value": "30"
        }]
    }
};

// Step 8 - Creating the DOM element to pass the react-fusioncharts component
class App extends React.Component {
  render() {
    if(!this.props.days.currentWeather)return null
     return (
     <ReactFC
        {...chartConfigs}/>
     );
  }
}
const mapStateToProps = ({days, weather}) => ({days,weather})
export default connect(mapStateToProps,null)(App)