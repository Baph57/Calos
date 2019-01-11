import { RECEIVE_WEATHER } from "../Axions/receiveweather";
import { CALENDAR } from "../Axions/calendar";
import { NEW_TABLE_ROW } from "../Axions/newTableRow";
import moment from "moment";
import { UPDATE_WEATHER } from "../Axions/updateWeather";

let initialState = {
  objToShip: [],
  currentDate: moment().format("MMMM Do YYYY"),
  dateForChart: moment()
    .format("MM D YYYY")
    .split(" ")
    .reverse()
    .join(" "),
  epochTime: new Date().getTime(),
  weather: [],
  currentWeather: [],
  weatherArray: [],
  idForEntry: 0
  // isATracker: false
};
export default function days(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_WEATHER:
      return {
        ...state,
        weather: action.weather
      };
    case CALENDAR:
      // state.weather.list.map(x=>{state.chartArray.push(x.dt_txt.slice(0,10))})
      let placeholder = moment(action.calendar.date)
        .format("MM D YYYY")
        .split(" ");
      let placeholder2 = [];
      placeholder2.push(placeholder[2], placeholder[0], placeholder[1]);
      let placeholder3 = placeholder2.join("-");
      // state.weather.list.map(x=>{
      // if(x.dt_txt.slice(0,10)===state.dateForChart){
      //     state.dataForChart.dataLine.datasets.data=x.main.temp_max
      // }else{}
      // })
      // if(x.dt_txt.slice(0,10)===state.dateForChart){
      //     state.dataForChart.dataLine.datasets.data=x.main.temp_max
      // }else{}
      var accArr = [];
      let weatherArray = [];
      for (let x in state.weather.list) {
        // console.log(state.weather.list[x].dt_txt.slice(0,10))
        // console.log(state.weather.list[x].main.temp_max, 'max temp')
        if (state.weather.list[x].dt_txt.slice(0, 10) === state.dateForChart) {
          accArr.push(state.weather.list[x].main.temp_max);
        } else {
          weatherArray = accArr;
        }
      }
      return {
        ...state,
        weatherArray,
        currentDate: moment(action.calendar.date).format("MMMM Do YYYY"),
        dateForChart: placeholder3
      };
    case NEW_TABLE_ROW:
      // state.idForEntry+=1
    //   console.log("keia", action.tableObj)
      return {
        ...state,
        objToShip: [...state.objToShip, action.tableObj]
      };
    case UPDATE_WEATHER:
      return {
        ...state,
        currentWeather: action.payload
      };
    default:
      return state;
  }
}
