// import getForecastFromApi from "../../utils/api";
// import {currentUserPosition, units} from "../../utils/settings";
// import {bindAll} from "../../utils/index";
// import Component from '../framework/Component';
import React, {Component} from 'react';

class SetUnits extends Component {
    constructor(props) {
        super(props);
        // bindAll(this, 'setUnits');
        // this.host = document.createElement('div');
        // this.host.id = ('units-container');
        // this.host.addEventListener('click', this.setUnits);
        this.setUnits = this.setUnits.bind(this);
    }

    setUnits(e) {
        if (e.target && e.target.matches("#us-unit")) {
            // units.set('units', 'us').set('temperature', 'F').set('speed', 'mph').set('visibility', 'mi');
        } else if (e.target && e.target.matches("#si-unit")) {
            // units.set('units', 'si').set('temperature', 'C').set('speed', 'm/s').set('visibility', 'km');
        }
        // getForecastFromApi(currentUserPosition.get('latitude'), currentUserPosition.get('longitude'));
    }

    render() {
        return <div className='units-block-wrapper'>
                    <button id="us-unit" className="unit-button">˚F, mph</button>
                    <button id="si-unit" className="unit-button">˚C, m/s</button>
                </div>
    }

}

export default SetUnits;
