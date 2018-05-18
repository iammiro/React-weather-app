import React, {Component} from 'react';
import Geocode from "../../utils/react-geocode";

class LocationSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            isValid: true,
            position: {
                latitude: null,
                longitude: null
            }
        };
    }

    handleSubmit = (event) => {
        const city = this.state.city;
        if (!city.length) {
            this.setState({isValid: false});
        } else {
            Geocode.setApiKey("AIzaSyAh_XQ81L-28bp1dy60eKIL5txR-CjPxC0");
            Geocode.enableDebug();
            Geocode.fromAddress(city).then(
                response => {
                    const {lat, lng} = response.results[0].geometry.location;
                    this.props.onSubmit(lat, lng);
                },
                error => {
                    console.error(error);
                }
            );
        }
        event.preventDefault();
    };

    handleChange = (event) => {
        this.setState({city: event.target.value});

    };

    render() {
        const isValid = this.state.isValid;
        return (
            <form
                className={`option ${isValid ? 'address' : 'address-invalid'}`}
                onSubmit={this.handleSubmit}>
                <label htmlFor="address" id="">
                    <input
                        id="address"
                        type="text"
                        name="search"
                        className="address-input"
                        placeholder="TYPE CITY NAME"
                        value={this.state.value}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <button id="submit" className="btn-small" type="submit"/>
            </form>
        );
    }
}

export default LocationSearch;
