/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { connect } from 'react-redux';
import * as actions from './actions/actions.js';
import DailyAlgo from './components/DailyAlgo.jsx';
import LoginHeader from './components/LoginHeader.jsx';
import LoginModal from './components/LoginModal.jsx';
import NewTable from './components/table.jsx';


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
  const [userId, setUserId] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);

  useEffect(() => {
    props.retrieveAllAlgos();
  }, []);

  useEffect(() => {
    const foo = async () => {
      const res = await axios.get('/auth/verify');
      // if the verify fails, show modal else setUsername
      if (res.data === null) {
        setLoginClass('loginModal');
      } else {
        // console.log("data", res.data.userData);
        setUserName(res.data.userData.name);
        setUserId(res.data.userData.id);
        setUserAvatar(res.data.userData.avatar_url);
      }
    }
    foo().catch(console.error);
  }, []);

  function handleClick() {
    loginClass === 'loginModal'
      ? setLoginClass('loginModalHidden')
      : setLoginClass('loginModal');
  }

  return (
    <div className="mainContainer">
      <LoginModal loginClass={loginClass} handleClick={handleClick} />
      <LoginHeader userName={userName} />
      <DailyAlgo />
      <NewTable data={props.algoList} />
      {/* <FormModal userId={userId} algo={props.algoList[0]} /> */}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
