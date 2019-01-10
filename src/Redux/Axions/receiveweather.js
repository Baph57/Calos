// import axios from 'axios'
export const RECEIVE_WEATHER = "RECEIVE_WEATHER";

export const receiveWeather = weather => ({
    type: RECEIVE_WEATHER,
    weather
})
//dunkem
// export default () => dispatch => {
//     axios.get('api.openweathermap.org/data/2.5/forecast?q=Phoenix,US&appid=2a6f3d931465abda6155e2401114ccf5&units=imperial',
//     {headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'},
//     baseURL:''})
//     .then(x => console.log(x.json()))
//     .then(x => x.json())
//     .then(x => dispatch(receiveWeather(x)))
//     .catch(e => alert(e));
// }
export default () => dispatch =>
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Phoenix,US&appid=2a6f3d931465abda6155e2401114ccf5&units=imperial')
    .then(res => res.json())
    // .then(x=> console.log(x, "weather"))
    .then(weather => dispatch(receiveWeather(weather)))
    .catch(e => alert(e));