import React, { useState, useEffect } from 'react';
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
    <div>
      <LoginHeader userName={userName} userAvatar={userAvatar} />
      <div className="mainContainer">
        <LoginModal loginClass={loginClass} handleClick={handleClick} />
        <DailyAlgo data={props.algoList} />
        <NewTable data={props.algoList} />
        {/* <FormModal userId={userId} algo={props.algoList[0]} /> */}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
