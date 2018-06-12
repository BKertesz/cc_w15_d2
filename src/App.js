import React, { Component } from 'react';
import MoviesContainer from './containers/MoviesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MoviesContainer />  
      </div>
    );
  }
}

export default App;
