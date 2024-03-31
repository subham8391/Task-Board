import React, { useState } from 'react';

function AddTaskBtn({ addTask }) {
 
  const [showModal, setShowModal] = useState(false);
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    team: '',
    assignees: '',
    priority: 'P0',
    status: 'Pending'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
    const taskWithDate = {
      ...taskData,
      dateAdded: currentDate
    };
    addTask(taskWithDate);
    setShowModal(false);
    setTaskData({
      title: '',
      description: '',
      team: '',
      assignees: '',
      priority: 'P0',
      status: 'Pending'
    });
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleFormSubmit(e);
    }
  };

  return (
    <>
      <button className='add-task' onClick={() => setShowModal(true)}>Add New Task</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="at-head">
              <h2>Create A Task</h2>
              <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            </div>
            <div className="at-form">
              <form onSubmit={handleFormSubmit}  className='addtask-form'>
                <div className="input-fields">
                  <label htmlFor="title">Title</label>
                  <div className="field-aria">
                    <input
                      type="text"
                      id='title'
                      name='title'
                      value={taskData.title}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      required
                    />
                  </div>
                </div>
                <div className="input-fields">
                  <label htmlFor="description">Description</label>
                  <div className="field-aria">
                    <textarea
                      id='description'
                      name='description'
                      value={taskData.description}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      required
                    />
                  </div>
                </div>
                <div className="input-fields">
                  <label htmlFor="team">Team</label>
                  <div className="field-aria">
                    <input
                      type="text"
                      id='team'
                      name='team'
                      value={taskData.team}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      required
                    />
                  </div>
                </div>
                <div className="input-fields">
                  <label htmlFor="assignees">Assignees</label>
                  <div className="field-aria">
                    <input
                      type="text"
                      id='assignees'
                      name='assignees'
                      value={taskData.assignees}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      required
                    />
                  </div>
                </div>
                <div className="input-fields">
                  <label htmlFor="priority">Priority</label>
                  <div className="field-aria">
                    <select
                      name="priority"
                      id='priority'
                      value={taskData.priority}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      required
                    >
                      <option value="P0">P0</option>
                      <option value="P1">P1</option>
                      <option value="P2">P2</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
                {/* <div className="input-fields">
                  <label htmlFor="status">Status</label>
                  <div className="field-aria">
                    <select
                      name="status"
                      id='status'
                      value={taskData.status}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      required
                    >
                      <option value="Pending">Pending</option>
                      <option value="InProgress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="Deployed">Deployed</option>
                      <option value="Deferred">Deferred</option>
                    </select>
                  </div>
                </div> */}
                {/* We can use it for directly chose where we wish to add the task */}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AddTaskBtn;