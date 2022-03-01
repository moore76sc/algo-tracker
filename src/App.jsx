
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import MainContainer from './client/MainContainer.jsx';

/* class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <MainContainer/>
      </div>
    );
  }
} */
const App = () => {
  return (
    <div>
      <MainContainer/>
    </div>
  );
}

export default hot(App);
