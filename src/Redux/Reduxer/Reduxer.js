
import { ON_CLICK_CONSOLE_LOG } from "../Axions/onclick";
import { RECEIVE_WEATHER } from "../Axions/receiveweather";
import {CALENDAR} from "../Axions/calendar"
import {NEW_TABLE_ROW} from "../Axions/newTableRow"

let initialState = {
    objToShip: [{}],
    currentDate: ""
}
export default function days (state = initialState, action){
    switch (action.type){
        case ON_CLICK_CONSOLE_LOG :
        return console.log(action.log)
        case RECEIVE_WEATHER:
        return action.weather.map(weather => ({...weather}))
        case CALENDAR:
        return {
            ...state,
            currentDate: action.calendar
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