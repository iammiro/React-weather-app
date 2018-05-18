import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import LocationSearch from "./components/LocationSearch/LocationSearch";
import SetUnits from "./components/SetUnits/SetUnits"
import WeekForecast from "./components/WeekForecast/WeekForecast"
import CurrentUserPosition from "./components/CurrentUserPosition/CurrentUserPosition"
import Favorites from "./components/Favorites/Favorites"
import Footer from './components/Footer/Footer'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'Kiev',
            position: {
                latitude: 30,
                longitude: 40
            },
            units: ''
        }
    }

    handleFormSubmit = (lat, lng) => {
        this.setState({
            position: {
                latitude: lat,
                longitude: lng
            }
        })
    };

    render() {
        return (
            <div className="App">
                <header>
                    <div className='options'>
                        <div id='input-search-container'>
                            <LocationSearch
                                onSubmit={this.handleFormSubmit}
                            />
                            <CurrentUserPosition/>
                        </div>
                        <div id='units-container'>
                            <SetUnits/>
                        </div>
                        <div id='favorite-cities-container'>
                            <Favorites/>
                        </div>
                    </div>
                </header>
                <WeekForecast
                    latitude={this.state.position.latitude}
                    longitude={this.state.position.longitude}
                />
                <Footer/>
            </div>
        );
    }
}

export default App;
