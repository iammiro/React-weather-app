import getCityName from "../../utils/googleGeocoding.js";
import React, {Component} from 'react';

class LocationSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            isValid: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        const city = this.state.city;
        console.log(city);
        console.log(this.state);
        if (!city.length) {
            this.updateState({isValid: false});
        } else {
            getCityName(this.state.city);
            // this.getForecastFromApi(40, 60);
        }
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({city: event.target.value});
    }

    render() {
        return <form className="option {isValid ? 'address' : 'address-invalid'}" onSubmit={this.handleSubmit}>
            <label htmlFor="address" id="">
                <input
                    id="address"
                    type="text"
                    name="search"
                    className="address-input"
                    placeholder="TYPE CITY NAME"
                    value={this.state.value}
                    onChange={this.handleChange}
                    required/>
            </label>
            <button id="submit" className="btn-small" type="submit"/>
        </form>;
    }
}

export default LocationSearch;
