import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import LocationSearch from "./components/LocationSearch/LocationSearch";
import SetUnits from "./components/SetUnits/SetUnits"
import WeekForecast from "./components/WeekForecast/WeekForecast"
import CurrentUserPosition from "./components/CurrentUserPosition/CurrentUserPosition"

class App extends Component {
    render() {
        return (
            <div className="App">
                <LocationSearch/>
                <CurrentUserPosition/>
                <SetUnits/>
                <WeekForecast/>
            </div>
        );
    }
}

export default App;
