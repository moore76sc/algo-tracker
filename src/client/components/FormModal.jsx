import React from 'react';

const FormModal = (props) => {
  const { closeButton } = props;
  
  /**
   * 'completed' var DROPDOWN
   * 'timeComplexity' var DROPDOWN
   * 'difficulty' var DROPDOWN
   * 'repeat' var DROPDOWN
   * 'notes' var STRING
   * 
   * auto-generated data of algo from database
   * 'title' var
   * 'category' var
   * 'date' var
   */

  return (
    <form className="form">
      <div className="flex flex-wrap -mx-3 mb-6">
        <label className="label">completed</label>

          <label className="label">time complexity</label>
        <div className="relative">
          <select className="select" id="timeComplexity">
            <option>constant: O(1)</option>
            <option>linear: O(n)</option>
            <option>quadratic: O(n<sup>2</sup>)</option>
            <option>logarithmic: O(log n)</option>
            <option>linearithmic: O(n<sup>*</sup>log n)</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="label" for="grid-city">
            City
          </label>
          <input className="input" id="grid-city" type="text" placeholder="Albuquerque">
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="label" for="grid-state">
            State
          </label>
          <div className="relative">
            <select className="select" id="grid-state">
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
            Zip
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="label" for="notes">
            notes
          </label>
          <textarea className="textarea" id="notes" rows="3" placeholder="Notes..."></textarea>
        </div>
      </div>


    </form>
  )
}

export default FormModal;