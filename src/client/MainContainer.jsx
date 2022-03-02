import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions.js';
import DailyAlgo from './components/DailyAlgo.jsx'
import Login from './components/Login.jsx';
import LoginModal from './components/LoginModal.jsx';
import Table from './components/TrackerTable.jsx';
const axios = require('axios');

const mapStateToProps = state => ({
  // algoList: state.
});

const mapDispatchToProps = dispatch => ({
  //create functions that will dispatch action creators
});

const data = [{
   name: 'Best Time to Buy and Sell Stock',
   category: 'Easy',
   link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
   bigO: 'O',
   notes: 'Find local min and search for local max, sliding window;',
   solution: 'https://www.youtube.com/watch?v=1pkOgXD63yU'
 }]

const MainContainer = (props) => {
  const [loginClass, setLoginClass] = useState('loginModalHidden');
  const [userName, setUserName] = useState(null);
  const [ranOnce, setRanOnce] = useState(null);

  useEffect(() => {
    if (ranOnce) return;
    const foo = async () => {
      const res = await axios.get(`/auth/verify`);
      if (res.data === null) {
        setLoginClass('loginModal'); // if the verify fails, show modal
      } else {
        setUserName(res.data.name);
      }
    }
    foo().catch(console.error);
    setRanOnce(true);
  });

  function handleClick() { (loginClass === 'loginModal') ? setLoginClass('loginModalHidden') : setLoginClass('loginModal'); }

  return (
    <div className="mainContainer">
      <LoginModal loginClass={loginClass} handleClick={handleClick}/>
      <Login userName={userName}/>

      <DailyAlgo />
      <Table data={data} />

    </div>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
