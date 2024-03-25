import React from 'react'
import AddTaskBtn from './AddTaskBtn'
function OperationAria({ addTaskToPending }) {
  const handleSubmit = (formData) => {
    addTaskToPending(formData);
  };
  return (
    <>
      <section className="op-section">
        <div className="op-aria">
          <div className="op-top">
            <div className="filter">
              <p>Filter By:</p>
              <input type="text" id='aName' placeholder='Assignee Name' />
              <select id="selectOption" >
              <option value="">Priority</option>
                <option value="p0">p0</option>
                <option value="p1">p1</option>
                <option value="p2">p2</option>
              </select>
              <input
                type="date"
                id="dateInput"
              />
            </div>
            <AddTaskBtn handleSubmit={handleSubmit} />

          </div>
          <div className="op-bottom">
            <p>Stor By:</p>
            <select id="selectOption" >
              <option value="">Priority</option>
                <option value="p0">p0</option>
                <option value="p1">p1</option>
                <option value="p2">p2</option>
              </select>
          </div>
        </div>
      </section>
    </>
  )
}

export default OperationAria