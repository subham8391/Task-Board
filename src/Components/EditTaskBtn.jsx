import React, { useState } from 'react';

function EditTaskBtn({ task, updateTask,onClose }) {
  const [formData, setFormData] = useState({ ...task });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Call updateTask function with updated task data
    updateTask(formData);
    // Close modal after form submission
    setShowModal(false);
    onClose();
  };

  const handleReset = () => {
    setFormData({ ...task });
  };

  return (
    <>
      <button className='edit-btn' onClick={() => setShowModal(true)}>EDIT</button>

      {showModal && (
        <div className="modal">
          <div className="edit-content">
            <div className="edit-head">
              <h2>EDIT Task</h2>
              <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            </div>
            <div className="edit-form">
              <form onSubmit={handleFormSubmit} className='addtask-form'>
                <div className="edit-fields">
                  <label htmlFor="title">Title</label>
                  <div className="edit-field-aria">
                    <input
                      type="text"
                      id='title'
                      name='title'
                      value={formData.title}
                      readOnly // Make the field read-only
                    />
                  </div>
                </div>
                <div className="edit-fields">
                  <label htmlFor="description">Description</label>
                  <div className="edit-field-aria">
                    <textarea
                      id='description'
                      name='description'
                      value={formData.description}
                      readOnly 
                    />
                  </div>
                </div>
                <div className="edit-fields">
                  <label htmlFor="team">Team</label>
                  <div className="edit-field-aria">
                    <input
                      type="text"
                      id='team'
                      name='team'
                      value={formData.team}
                      readOnly
                    />
                  </div>
                </div>
                <div className="edit-fields">
                  <label htmlFor="assignees">Assignees</label>
                  <div className="edit-field-aria">
                    <input
                      type="text"
                      id='assignees'
                      name='assignees'
                      value={formData.assignees}
                      readOnly 
                    />
                  </div>
                </div>
                <div className="edit-aria">
                  <div className="editable-fields">
                    <label htmlFor="priority">Priority</label>
                    <div className="editable-field-aria">
                      <select
                        name="priority"
                        id='priority'
                        value={formData.priority}
                        onChange={handleChange}
                      >
                        <option value="P0">P0</option>
                        <option value="P1">P1</option>
                        <option value="P2">P2</option>
                      </select>
                    </div>
                  </div>
                  <div className="editable-fields">
                    <label htmlFor="status">Status</label>
                    <div className="editable-field-aria">
                      <select
                        id='status'
                        name='status'
                        value={formData.status}
                        onChange={handleChange}
                      >
                        <option value="Pending">Pending</option>
                      <option value="InProgress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="Deployed">Deployed</option>
                      <option value="Deferred">Deferred</option>
                     </select>
                    </div>
                  </div>
                </div>
                <div className="edit-buttons">
                  <button type="submit">Submit</button>
                  <button type="button" onClick={handleReset}>Reset</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditTaskBtn;
