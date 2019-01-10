
import { RECEIVE_WEATHER } from "../Axions/receiveweather";
import {CALENDAR} from "../Axions/calendar"
import {NEW_TABLE_ROW} from "../Axions/newTableRow"
import moment from "moment"

let initialState = {
    objToShip: [],
    currentDate: moment().format("MMMM Do YYYY"),
    dateForChart: moment().format("MM D YYYY"),
    epochTime: new Date().getTime(),
    weather: []
}
export default function days (state = initialState, action){
    switch (action.type){
        case RECEIVE_WEATHER:
        return {
            ...state,
            weather: action.weather
        }
        case CALENDAR:
        console.log(moment(action.calendar.date).format("MM D YYYY").getTime())
        return {
            ...state,
            currentDate: moment(action.calendar.date).format("MMMM Do YYYY"),
            dateForChart: moment(action.calendar.date).format("MM D YYYY")
        }
        case NEW_TABLE_ROW:
        return {
            ...state,
            objToShip: [...state.objToShip, action.tableObj]
        }
        default:
        return state
    }
}