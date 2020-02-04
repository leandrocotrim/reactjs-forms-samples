import React from 'react';

import SingleForm from './components/single-form';
import TemperatureConvert from './components/temperature-convert';

class App extends React.Component {

  render() {
    return (
      <>
        <SingleForm />
        <TemperatureConvert />
      </>
    )
  }
}

export default App;
