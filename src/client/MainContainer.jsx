import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions.js';
import DailyAlgo from './components/DailyAlgo.jsx'
import Login from './components/Login.jsx';
import Table from './components/TrackerTable.jsx';


const mapStateToProps = state => ({
  algoList: state.algos.algoList
});

const mapDispatchToProps = dispatch => ({
  retrieveAllAlgos: () => actions.retrieveAllAlgosActionCreator(dispatch)
});

const MainContainer = (props) => {
  useEffect(() => {
    props.retrieveAllAlgos()
  }, [])

  return (
    <div className="login">
      <Login/>
      <a className="btn btn-blue" type='button' href="/auth" >
        Login with Github
      </a>
      <a className="btn btn-blue" type='button' href="/auth/" >
      test cookie
    </a>
      <DailyAlgo />
      <Table data={props.algoList}/>
    </div>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
