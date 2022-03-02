/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const FormModal = () => {
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
  <form className="form">
    {/* mx: left/right margins; mb: bottom margin */}
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="label">completed</label>
        <div className="relative">
          <select className="select" id="completed">
            <option>yes</option>
            <option>in progress</option>
          </select>
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="label">time complexity</label>
          <div className="relative">
            <select className="select" id="timeComplexity">
              <option>constant: O(1)</option>
              <option>linear: O(n)</option>
              <option>
                quadratic: O(n
                <sup>2</sup>
                )
              </option>
              <option>logarithmic: O(log n)</option>
              <option>
                linearithmic: O(n
                <sup>*</sup>
                log n)
              </option>
            </select>
          </div>
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="label">difficulty</label>
          <div className="relative">
            <select className="select" id="difficulty">
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
        <label className="label" htmlFor="repeat">
          would you like this to repeat again?
        </label>
        <div className="relative">
          <select className="select" id="repeat">
            <option>yes</option>
            <option>no</option>
          </select>
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <div className="w-full px-3">
            <label className="label" htmlFor="notes">
              notes
            </label>
            <textarea
              className="textarea"
              id="notes"
              rows="3"
              placeholder="Notes..."
            />
          </div>
        </div>
      </div>
    </div>

    <div className="md:flex md:items-center">
      <div className="md:w-1/3" />
      <div className="md:w-2/3">
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          submit
        </button>
      </div>
    </div>
  </form>;
};
