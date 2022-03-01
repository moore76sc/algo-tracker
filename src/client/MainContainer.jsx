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

/* class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="login">
        <Login/>
      </div>
    );
    }
} */
const MainContainer = () => {

return (
  <div className="login">
    <Login/>
    <a class="btn btn-blue" type='button' href="/api/auth" >
      Login with Github
    </a>
  </div>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);