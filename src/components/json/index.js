import React from 'react';

class Json extends React.Component {
    render() {
        return (
            <div className="json">
                {JSON.stringify(this.props.json, this.props.replacer, this.props.space)}
            </div>
        )
    }
}

export default Json;
