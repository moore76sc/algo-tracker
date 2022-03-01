
import React from "react";
import { hot } from 'react-hot-loader/root';
import MainContainer from './client/MainContainer';

class App extends React.Component {
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
}

export default hot(App);
