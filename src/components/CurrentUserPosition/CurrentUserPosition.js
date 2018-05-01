// import {setCoordinatesToMapStorage} from "./setCoordinates";
// import getForecastFromApi from "./api";
// import HandlingURL from "./Url";
import React, {Component} from 'react';

// const url = new HandlingURL();

class CurrentUserPosition extends Component {
    constructor(props) {
        super(props);
    }

    getCurrentUserPosition(e) {
        if (e.target && e.target.matches("#currentPos")) {
            navigator.geolocation.getCurrentPosition(pos => {
                    let crd = pos.coords;
                    // setCoordinatesToMapStorage(crd.latitude, crd.longitude);
                    // url.addHistoryState(crd.latitude, crd.longitude);
                    // getForecastFromApi(crd.latitude, crd.longitude);
                    document.getElementById('address').value = `${crd.latitude.toFixed(3)}, ${crd.longitude.toFixed(3)}`;
                }, err => console.warn(`ERROR(${err.code}): ${err.message}`),
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                });
        }
    }

    render() {
        return <button id="currentPos" className="btn-small" onClick={this.getCurrentUserPosition}/>;
    }
}

export default CurrentUserPosition;
