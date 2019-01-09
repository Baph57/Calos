
import { ON_CLICK_CONSOLE_LOG } from "../Axions/onclick";
import { RECEIVE_WEATHER } from "../Axions/receiveweather";
import {CALENDAR} from "../Axions/calendar"
import {NEW_TABLE_ROW} from "../Axions/newTableRow"

let initialState = [
    {objToShip: {}}]
export default function days (state = initialState, action){
    switch (action.type){
        case ON_CLICK_CONSOLE_LOG :
        return console.log(action.log)
        case RECEIVE_WEATHER:
        return action.weather.map(weather => ({...weather}))
        case CALENDAR:
        return state.map(x=>{[...x], x.objToShip = action.objToShip})
        case NEW_TABLE_ROW:
        return action.tableObj
        default:
        return state
    }
}