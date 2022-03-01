import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions.js';


const mapStateToProps = state => ({
  //insert state here
});

const mapDispatchToProps = dispatch => ({
  //create functions sthat will dispatch action creators
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="app">
        
      </div>
    )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);