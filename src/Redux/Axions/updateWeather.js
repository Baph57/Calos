export const UPDATE_WEATHER = "UPDATE_WEATHER";

export const updateWeather= payload => {
    return {
        type: UPDATE_WEATHER,
        payload
    }
}
export default () => dispatch =>
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Phoenix,US&appid=2a6f3d931465abda6155e2401114ccf5&units=imperial')
    .then(res => res.json())
    // .then(x=> console.log(x, "weather"))
    .then(payload => dispatch(updateWeather(payload)))
    .catch(e => alert(e));