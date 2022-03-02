import React, { useState } from 'react';
import './FormModal.css';
const axios = require('axios');

const FormModal = ({ formClass, handleHide }) => {
  // const { closeButton } = props;
  const [completed, setCompleted] = useState('yes');
  const [timeComp, setTimeComp] = useState('constant: O(1)');
  const [difficulty, setDifficulty] = useState('easy');
  const [repeat, setRepeat] = useState('yes');
  const [notes, setNotes] = useState('');


  const handleSubmit = () => {
    // needs to get the algo of the day Id or name
    const body = {
      userId: props.userId,
      algoName: props.algo.name,
      completed: completed,
      timeComp: timeComp,
      difficulty: difficulty,
      repeat: repeat,
    }
    console.log(body);
    axios.post(`/auth/addAlgoData`, {body});
  }

  console.log(formClass);
  return (
    <div className={formClass}>
      <form className="form" action="/auth/getUserData" method="post" >
        {/* mx: left/right margins; mb: bottom margin */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="label">completed</label>
            <div className="relative">
              <select className="select" id="completed" onChange={(e) => { setCompleted(e.target.value) }}>
                <option>yes</option>
                <option>in progress</option>
              </select>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="label">time complexity</label>
              <div className="relative">
                <select className="select" id="timeComplexity" onChange={(e) => { setTimeComp(e.target.value) }}>
                  <option>constant: O(1)</option>
                  <option>linear: O(n)</option>
                  <option>quadratic: O(n<sup>2</sup>)</option>
                  <option>logarithmic: O(log n)</option>
                  <option>linearithmic: O(n<sup>*</sup>log n)</option>
                </select>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="label">difficulty</label>
              <div className="relative">
                <select className="select" id="difficulty" onChange={(e) => { setDifficulty(e.target.value) }}>
                  <option>easy</option>
                  <option>somewhat easy</option>
                  <option>somewhat difficult</option>
                  <option>difficult</option>
                  <option>extremely difficult</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="label" for="repeat">
              would you like this to repeat again?
            </label>
            <div className="relative">
                <select className="select" id="repeat" onChange={(e) => { setRepeat(e.target.value) }}>
                  <option>yes</option>
                  <option>no</option>
                </select>
              </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <div className="w-full px-3">
                <label className="label" for="notes">
                  notes
                </label>
                <textarea className="textarea" id="notes" rows="3" placeholder="Notes..."></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button"
              onClick={ handleSubmit}>
              submit
            </button>
          </div>
        </div>
      </form>

      <button className="hideButton" type="button" onClick={handleHide}> Hide </button>
    </div>
  )
}

export default FormModal;


/**
 * 'completed' var DROPDOWN
 * 'timeComplexity' var DROPDOWN
 * 'difficulty' var DROPDOWN
 * 'repeat' var DROPDOWN
 * 'notes' var TEXT
 *
 * auto-generated data of algo from database
 * 'title' var
 * 'category' var
 * 'date' var
 */
