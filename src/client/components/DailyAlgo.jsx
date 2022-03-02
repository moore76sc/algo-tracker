import React from 'react';
import './DailyAlgo.css';
import PromptChanger from './PromptChanger.jsx';
import FormModal from './FormModal.jsx';

/**
 * 
 * prompt changes daily based on random fetch request from database
 * 
 */

const DailyAlgo = () => {
  
  
  return (
    <div className="outerBox">
      <h1>Algo of the Day</h1>

      {/* Algo Prompt */}
      <PromptChanger />

      {/* Button for letcode link to daily algo */}
      <button type="button" className="btn">
        {/* write logic for finding associated link with redux and fetching from database */}
        <link rel="stylesheet" href="" />
        link
      </button>

      {/* Button for Form Modal */}

    </div>
  )
}

export default DailyAlgo;