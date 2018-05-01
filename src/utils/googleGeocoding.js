import Geocode from "react-geocode";
import darkSky from "./darkSky";

const getCityName = (city) => {
    Geocode.setApiKey("AIzaSyAh_XQ81L-28bp1dy60eKIL5txR-CjPxC0");

    Geocode.enableDebug();

    Geocode.fromAddress(city).then(
        response => {
            const {lat, lng} = response.results[0].geometry.location;
            darkSky(lat, lng);
        },
        error => {
            console.error(error);
        }
    );
};

export default getCityName;
