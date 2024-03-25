import React, { useState } from 'react';

function AddTaskBtn({ handleSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    team: '',
    assignees: '',
    priority: 'p0'
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    handleSubmit(formData);
    // Clear form data after submission
    setFormData({
      title: '',
      description: '',
      team: '',
      assignees: '',
      priority: 'p0'
    });
    // Close modal after form submission
    setShowModal(false);
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
              <form onSubmit={handleFormSubmit} className='addtask-form'>
                <div className="input-fields">
                  <label htmlFor="title">Title</label>
                  <div className="field-aria">
                    <input
                      type="text"
                      id='title'
                      name='title'
                      value={formData.title}
                      onChange={handleChange}
                      onKeyPress={handleKeyPress}
                    />
                  </div>
                </div>
                <div className="input-fields">
                  <label htmlFor="description">Description</label>
                  <div className="field-aria">
                    <textarea
                      id='description'
                      name='description'
                      value={formData.description}
                      onChange={handleChange}
                      onKeyPress={handleKeyPress}
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
                      value={formData.team}
                      onChange={handleChange}
                      onKeyPress={handleKeyPress}
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
                      value={formData.assignees}
                      onChange={handleChange}
                      onKeyPress={handleKeyPress}
                    />
                  </div>
                </div>
                <div className="input-fields">
                  <label htmlFor="priority">Priority</label>
                  <div className="field-aria">
                    <select
                      name="priority"
                      id='priority'
                      value={formData.priority}
                      onChange={handleChange}
                      onKeyPress={handleKeyPress}
                    >
                      <option value="p0">p0</option>
                      <option value="p1">p1</option>
                      <option value="p2">p2</option>
                    </select>
                  </div>
                </div>
                {/* Removed submit button */}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AddTaskBtn;