const appSettings = {
    container: document.getElementById('container'),
    apiUrl: 'https://api.darksky.net/forecast/',
    proxy: 'https://cors-anywhere.herokuapp.com/',
    apiKey: 'c0edd7e111d453106e09ff75c17397b8',
    init: {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
};

const developmentURLHandler = () => {
    const developmentURL = new URL(window.location.href);
    (developmentURL === 'http://localhost:8080' || 'localhost:8080') ?
        appSettings.appURL = (developmentURL.origin + '/') :
        appSettings.appURL = 'https://iammiro.github.io/Weather-app/dist/';
};

developmentURLHandler();

let currentUserPosition = new Map();
let recentlyViewedCities = new Map();
let favoriteCities = window.localStorage;
let units = new Map();
units.set('units', 'si');
units.set('temperature', 'C');
units.set('speed', 'm/s');
units.set('visibility', 'km');

export {appSettings, currentUserPosition, recentlyViewedCities, units, favoriteCities};
