import {appSettings, units} from '../../utils/settings.js';
import React, {Component} from 'react';
import Icon from '../Icon/Icon'

const LoadingIcon = () => {
    return <img className='loading-icon' src='img/loading.svg' alt='loading animation icon'/>;
};

class WeekForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            position: {
                latitude: this.props.latitude,
                longitude: this.props.longitude
            }
        };
    }

    getForecast() {
        let url = `${appSettings.proxy}${appSettings.apiUrl}${appSettings.apiKey}/${this.state.position.latitude},${this.state.position.longitude}?units=${units.get('units')}`;
        fetch(url, appSettings.init)
            .then(response => response.json())
            .then(myBlob => this.setState({
                data: myBlob.daily.data,
                isLoading: false
            }))
            .catch(error => console.log(error));
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.latitude !== prevState.latitude) {

            return {
                position: {
                    latitude: nextProps.latitude,
                    longitude: nextProps.longitude
                }
            };
        }
    }

    componentDidMount() {
        this.getForecast();
    }

    render() {
        const {data} = this.state;
        const {isLoading} = this.state;

        // let todayDate = new Date();
        // let todayDay = todayDate.getDay();
        // let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // let day = days[todayDay];

        return (
            <main
                id='container'
                className={`option ${isLoading ? 'loading' : 'loaded'}`}>
                <LoadingIcon/>

                {data.map(element =>
                    <div className="individual-day-forecast-wrapper" key={element.apparentTemperatureHighTime}>
                        {/*<div className="time">{days[todayDay]}</div>*/}
                        <Icon icon={element.icon}/>
                        {/*<img className="forecast-icon"*/}
                        {/*src={`https://iammiro.github.io/React-weather-app/img/${element.icon}.svg`}/>*/}
                        <div className="forecast-day-temperature">&#9790;
                            {Math.round(element.temperatureMin)}˚ &#8594; &#9788;
                            {Math.round(element.temperatureMax)}˚
                            {units.get('temperature')}.
                        </div>
                        <div className="forecast-summary">{element.summary}.</div>
                        <div className="individual-day-forecast-footer-wrapper">
                            <div className="forecast-item">Wind:<span
                                className='numeric'>{Math.round(element.windSpeed)} </span></div>
                            <div className="forecast-item">Humidity:<span
                                className='numeric'>{Math.round(element.humidity)} %</span></div>
                            <div className="forecast-item">Dew Pt:<span
                                className='numeric'>{Math.round(element.dewPoint)}˚</span></div>
                            <div className="forecast-item">UV Index:<span
                                className='numeric'>{Math.round(element.uvIndex)}</span></div>
                            <div className="forecast-item">Pressure:<span
                                className='numeric'>{Math.round(element.pressure)} hPa</span></div>
                        </div>
                    </div>
                )}
            </main>
        )
    }
}

export default WeekForecast;
