
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import MainContainer from './client/MainContainer.jsx';
import DailyAlgo from './client/components/DailyAlgo.jsx'

const App = () => {
  return (
    <div>
      <MainContainer />
      <DailyAlgo />
    </div>
  );
}

export default hot(App);
