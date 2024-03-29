import React, { useState } from 'react'

function DeleteTaskBtn({task,onDelete}) {
    const [showModal, setShowModal] = useState(false);
    const handleDelete = () => {
        onDelete(task);
        setShowModal(false);
      };
    return (
        <>
            <button className='delete-btn' onClick={() => setShowModal(true)}>DELETE</button>

            {showModal && (
                <div className="modal">
                    <div className="delete-content">
                        <div className="at-head">
                            <h2>DELETE TASK</h2>
                            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        </div>
                        <div className="delete-op">
                            <h4>Do You Want To Delete The Task</h4>
                            <div className="delete-action">
                                <h3>{task.title}</h3>
                                <div className="delete-confirm">
                                    <button onClick={handleDelete}>YES</button>
                                    <button onClick={() => setShowModal(false)}>NO</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DeleteTaskBtn;