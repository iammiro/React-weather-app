import React, {Component} from 'react';
import Skycons from 'react-skycons';

class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: this.props.icon.toUpperCase()
        }
    }

    render() {
        console.log(this.state);
        return (
            <Skycons
                color='white'
                icon={this.state.icon}
                autoplay={true}
            />
        )
    }
}

export default Icon;
