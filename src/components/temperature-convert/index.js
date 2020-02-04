import React from 'react';

import ScaleHelp from '../../helpers/scale-help';
import Scale from './scale/index';

class TemperatureConvert extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            typeValue: ScaleHelp.SCALES_TYPES.Celsius
        }
    }

    onChange = (e, type) => {
        this.setState({
            value: e.target.value,
            typeValue: type
        });
    }

    render() {
        return (
            <div>
                <h2>Temperature Convert</h2>
                <div>
                    <Scale
                        type={ScaleHelp.SCALES_TYPES.Celsius}
                        value={this.state.value}
                        typeValue={this.state.typeValue}
                        onChange={(e) => this.onChange(e, ScaleHelp.SCALES_TYPES.Celsius)} />
                </div>
                <div>
                    <Scale
                        type={ScaleHelp.SCALES_TYPES.Fahrenheit}
                        value={this.state.value}
                        typeValue={this.state.typeValue}
                        onChange={(e) => this.onChange(e, ScaleHelp.SCALES_TYPES.Fahrenheit)} />
                </div>
            </div>
        )
    }
}

export default TemperatureConvert;
