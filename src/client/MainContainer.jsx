import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions.js';
import Login from './components/login.jsx'


const mapStateToProps = state => ({
  //insert state here
});

const mapDispatchToProps = dispatch => ({
  //create functions that will dispatch action creators
});


const MainContainer = () => {

return (
  <div className="login">
    <Login/>
    <a class="btn btn-blue" type='button' href="/auth/github" >
      Login with Github
    </a>
    <br></br>
    <a class="btn btn-blue" type='button' href="/auth/" >
      test cookie
    </a>
  </div>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
