import React from 'react';

import Json from '../json';

class SingleForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      about: '',
      confirm: false
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h2>Single Form</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            Name: <input value={this.state.name} onChange={this.onChange} name="name" />
          </div>
          <div>
            About: <textarea value={this.state.about} onChange={this.onChange} name="about"></textarea>
          </div>
          <div>
            Confirm: <input type="checkbox" value={this.state.confirm} onChange={this.onChange} name="confirm" />
          </div>
          <div>
            <button>Enviar</button>
          </div>
        </form>
        <Json json={this.state} replace={null} space={2} />
      </div>
    )
  }
}

export default SingleForm;
