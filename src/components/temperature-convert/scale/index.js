import React from 'react';

import ScaleHelp from '../../../helpers/scale-help';

class Scale extends React.Component {

    render() {
        const scale = ScaleHelp.SCALES.get(this.props.type);
        let value = 0;
        
        if (isNaN(this.props.value)) {
            value = this.props.value;
        } else {
            value = this.props.type !== this.props.typeValue ? scale.formula(this.props.value) : this.props.value;
        }

        return (
            <>
                {scale.name}: <input value={value} onChange={this.props.onChange} />
            </>
        )
    }
}

export default Scale;
