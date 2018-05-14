import React, {Component} from 'react';

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            favorites: []
        };
        this.favoriteCities = window.localStorage;
    };

    handleChange = (event) => {
        this.setState({city: event.target.value});
    };

    addToFavorites = (event) => {
        event.preventDefault();
        const favorites = this.state.favorites;
        if (this.state.city) {
            favorites.push(this.state.city);
            this.setState({favorites: favorites});
            this.setState({city: ''});
            this.favoriteCities.setItem(`${this.state.city}`, `${this.state.city}`);
        }
    };

    findFavoriteCityForecast = (event) => {
        event.preventDefault();
        let value = event.target.value;
        console.log(value);
    };

    componentDidMount = () => {
        const favorites = [];
        for (let i = 0, len = localStorage.length; i < len; ++i) {
            favorites[i] = localStorage.getItem(localStorage.key(i));
        }
        this.setState({favorites: favorites});
    };

    render() {
        return (
            <div className='favorite-cities-container'>
                <input
                    value={this.state.city}
                    type='text'
                    onChange={this.handleChange}/>
                <select id="favorite-cities" onChange={this.findFavoriteCityForecast}>
                    {this.state.favorites.map((option) =>
                        <option key={option}>{option}</option>)}
                </select>
                <input
                    type='button'
                    onClick={this.addToFavorites}
                    id='addToFav'
                    className='btn-small'/>
            </div>
        )
    }
}

export default Favorites;
