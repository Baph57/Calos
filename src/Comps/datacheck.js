import React, {Component} from 'react'
import {connect} from 'react-redux'
import Ugh from "./Ugh"

class CheckLoadedApp extends Component{ 
    render(){
        return(
    this.props.days.currentWeather.main.length ? <Ugh /> : 'Loading...'
        )}}
const mapStateToProps = ({days}) => ({days})
export default connect(mapStateToProps,null)(CheckLoadedApp)