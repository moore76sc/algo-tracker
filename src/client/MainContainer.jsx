import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions.js';
import DailyAlgo from './components/DailyAlgo.jsx'
import LoginHeader from './components/LoginHeader.jsx';
import LoginModal from './components/LoginModal.jsx';
import Table from './components/TrackerTable.jsx';
const axios = require('axios');

const mapStateToProps = state => ({
  algoList: state.algos.algoList
});

const mapDispatchToProps = dispatch => ({
  retrieveAllAlgos: () => actions.retrieveAllAlgosActionCreator(dispatch)
});

const MainContainer = (props) => {
  const [loginClass, setLoginClass] = useState('loginModalHidden');
  const [userName, setUserName] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);

  useEffect(() => {
    props.retrieveAllAlgos();
  }, []);

  useEffect(() => {
    const foo = async () => {
      const res = await ( await axios.get(`/auth/verify`));
      // if the verify fails, show modal else setUsername
      if (res.data === null) {
        setLoginClass('loginModal');
      } else {
        // console.log("data", res.data.userData);
        setUserName(res.data.userData.name);
        setUserAvatar(res.data.userData.avatar_url);
      }
    }
    foo().catch(console.error);
  }, []);

  function handleClick() { (loginClass === 'loginModal') ? setLoginClass('loginModalHidden') : setLoginClass('loginModal'); }

  return (
    <div className="mainContainer">
      <LoginModal loginClass={loginClass} handleClick={handleClick}/>
      <LoginHeader userName={userName} userAvatar={userAvatar}/>
      <DailyAlgo />
      <Table data={props.algoList} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
