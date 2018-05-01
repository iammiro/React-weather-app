import {appSettings, units} from '../../utils/settings.js';
import React, {Component} from 'react';

const latitude = 40;
const longitude = 60;

class WeekForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});

        let url = `${appSettings.proxy}${appSettings.apiUrl}${appSettings.apiKey}/${latitude},${longitude}?units=${units.get('units')}`;
        fetch(url, appSettings.init)
            .then(response => response.json())
            .then(myBlob => this.setState({data: myBlob.daily.data}))
            .catch(error => console.log(error));

    }

    render() {
        const {data, isLoading} = this.state;

        return (
            <div>
                {data.map(element =>
                    <div className="individual-day-forecast-wrapper" key={element.apparentTemperatureHighTime}>
                        <img className="forecast-icon" src={`${appSettings.appURL}/img/${element.icon}.svg`}/>
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
                            <div className="forecast-item">Pressure:{Math.round(element.pressure)} hPa
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default WeekForecast;
