import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions.js';
import DailyAlgo from './components/DailyAlgo.jsx'
import Login from './components/Login.jsx';
import Table from './components/TrackerTable.jsx';


const mapStateToProps = state => ({
  //insert state here
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



const MainContainer = () => {
  return (
    <div className="login">
      <Login/>
      <a class="btn btn-blue" type='button' href="/auth" >
        Login with Github
      </a>
      <DailyAlgo />
      <Table data={data}/>
    </div>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);