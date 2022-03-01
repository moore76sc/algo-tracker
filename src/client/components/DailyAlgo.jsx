import React from 'react';
import './DailyAlgo.css';
import PromptChanger from './PromptChanger.jsx';

/**
 * 
 * prompt changes daily based on random fetch request from database
 * 
 */

const DailyAlgo = () => {
  
  
  return (
    <div className="outerBox">
      <h1>Algo of the Day</h1>
      <PromptChanger />
    </div>
  )
}

export default DailyAlgo;