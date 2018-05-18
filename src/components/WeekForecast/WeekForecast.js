import {appSettings, units} from '../../utils/settings.js';
import React, {Component} from 'react';

class WeekForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false,
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
            .then(myBlob => this.setState({data: myBlob.daily.data}))
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
        this.setState({isLoading: true});
        this.getForecast();
    }

    render() {
        this.getForecast();
        const {data} = this.state;

        return (
            <main id='container'>
                {data.map(element =>
                    <div className="individual-day-forecast-wrapper" key={element.apparentTemperatureHighTime}>
                        <img className="forecast-icon" src={`https://iammiro.github.io/React-weather-app/img/${element.icon}.svg`}/>
                        <div className="forecast-day-temperature">&#9790;
                            {Math.round(element.temperatureMin)}˚ &#8594; &#9788;
                            {Math.round(element.temperatureMax)}˚
                            {units.get('temperature')}.
                        </div>
                        <div className="forecast-summary">{element.summary}.</div>
                        <div className="individual-day-forecast-footer-wrapper">
                            <div className="forecast-item">Wind:{Math.round(element.windSpeed)} </div>
                            <div className="forecast-item">Humidity:{Math.round(element.humidity)} %</div>
                            <div className="forecast-item">Dew Pt:{Math.round(element.dewPoint)}˚</div>
                            <div className="forecast-item">UV Index:{Math.round(element.uvIndex)}</div>
                            <div className="forecast-item">Pressure:{Math.round(element.pressure)} hPa</div>
                        </div>
                    </div>
                )}
            </main>
        )
    }
}

export default WeekForecast;
