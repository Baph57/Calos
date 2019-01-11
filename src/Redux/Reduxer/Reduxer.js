
import { RECEIVE_WEATHER } from "../Axions/receiveweather";
import {CALENDAR} from "../Axions/calendar"
import {NEW_TABLE_ROW} from "../Axions/newTableRow"
import moment from "moment"
import { UPDATE_WEATHER } from "../Axions/updateWeather";

let initialState = {
    objToShip: [],
    currentDate: moment().format("MMMM Do YYYY"),
    dateForChart: moment().format("MM D YYYY").split(' ').reverse().join(' '),
    epochTime: new Date().getTime(),
    chartArray: [],
    weather: [],
    weatherArray: [],
    chartData: [{
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
                // data: this.state.weatherArray
                data: [5, 4, 7, 4, 8, 9, 6]
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
    }]
}
export default function days (state = initialState, action){
    switch (action.type){
        case RECEIVE_WEATHER:
        return {
            ...state,
            weather: action.weather
        }
        case CALENDAR:
        // state.weather.list.map(x=>{state.chartArray.push(x.dt_txt.slice(0,10))})
        let placeholder = moment(action.calendar.date).format("MM D YYYY").split(' ')
        let placeholder2 = []
        placeholder2.push(placeholder[2],placeholder[0],placeholder[1])
        let placeholder3 = placeholder2.join('-')
        // state.weather.list.map(x=>{
            // if(x.dt_txt.slice(0,10)===state.dateForChart){
            //     state.dataForChart.dataLine.datasets.data=x.main.temp_max
            // }else{}
        // })
        // if(x.dt_txt.slice(0,10)===state.dateForChart){
            //     state.dataForChart.dataLine.datasets.data=x.main.temp_max
            // }else{}
            var accArr = []
        for(let x in state.weather.list){
            state.weatherArray = []
            console.log(state.weather.list[x].dt_txt.slice(0,10))
            console.log(state.weather.list[x].main.temp_max, 'max temp')
                if(state.weather.list[x].dt_txt.slice(0,10) === state.dateForChart){
                    accArr.push(state.weather.list[x].main.temp_max)
                }else{state.weatherArray=accArr}
        
        }
        return {
            ...state,
            currentDate: moment(action.calendar.date).format("MMMM Do YYYY"),
            dateForChart: placeholder3,
            // chartData: state.dataLine.datasets[0].data = state.weatherArray
        }
        case NEW_TABLE_ROW:
        return {
            ...state,
            objToShip: [...state.objToShip, action.tableObj]
        }
        case UPDATE_WEATHER:
        return{
            ...state,
            chartData: [...state.chartData,state.chartData.dataLine.datasets[0].data = state.weatherArray]
        }
        default:
        return state
    }
}