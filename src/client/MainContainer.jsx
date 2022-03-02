/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Link, BrowserRouter, Routes, Route,
} from 'react-router-dom';
import * as actions from './actions/actions.js';
import DailyAlgo from './components/DailyAlgo.jsx';
import LoginHeader from './components/LoginHeader.jsx';
import LoginModal from './components/LoginModal.jsx';
import Table from './components/TrackerTable.jsx';

const axios = require('axios');

const mapStateToProps = state => ({
  algoList: state.algos.algoList,
});

const mapDispatchToProps = dispatch => ({
  retrieveAllAlgos: () => actions.retrieveAllAlgosActionCreator(dispatch),
});

const MainContainer = props => {
  const [loginClass, setLoginClass] = useState('loginModalHidden');
  const [userName, setUserName] = useState(null);
  const [ranOnce, setRanOnce] = useState(null);

  useEffect(() => {
    props.retrieveAllAlgos();
  }, [props]);

  useEffect(() => {
    if (ranOnce) return;
    const foo = async () => {
      const res = await axios.get('/auth/verify');
      // if the verify fails, show modal else setUsername
      res.data === null
        ? setLoginClass('loginModal')
        : setUserName(res.data.name);
    };
    foo().catch(console.error);
    setRanOnce(true);
  }, [ranOnce]);

  function handleClick() {
    loginClass === 'loginModal'
      ? setLoginClass('loginModalHidden')
      : setLoginClass('loginModal');
  }

  return (
    <div className="mainContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DailyAlgo />}>
            <Route path="/user" element={<Table data={props.algoList} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);



    //   <div className="mainContainer">
    //     <LoginModal loginClass={loginClass} handleClick={handleClick} />
    //     <LoginHeader userName={userName} />

    //     {/* <DailyAlgo /> */}
    //     <Table data={props.algoList} />