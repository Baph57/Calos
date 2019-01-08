
import { ON_CLICK_CONSOLE_LOG } from "../Axions/onclick";
import { RECEIVE_WEATHER } from "../Axions/receiveweather";

let initialState = {
    year: '',
    month: '',
    week: '',
    day: '',
    weather: {}
}
export default function days (state = initialState, action){
    switch (action.type){
        case ON_CLICK_CONSOLE_LOG :
        return console.log(action.log)
        case RECEIVE_WEATHER:
        return action.weather.map(weather => ({...weather}))
        default:
        return state
    }
}