import React, { useState, useEffect, useRef } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import EditTaskBtn from './EditTaskBtn';
import DeleteTaskBtn from './DeleteTaskBtn';

function ActionBtn({ idName,task,updateTask,onDelete}) {
  const [showModal, setShowModal] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    setIsDisabled(task.status.toLowerCase() === 'completed');
  }, [task.status]);


  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleActionClick = (e) => {
    e.stopPropagation(); 
    setShowModal(true);
  };
const handleClose=()=>{
  setShowModal(false);
}
  return (
    <>
      <button className='action' onClick={handleActionClick} disabled={isDisabled}>
        <BsThreeDotsVertical />
      </button>

      {showModal && (
        <div className="action-modal">
          <div className={`action-content ${idName}`} ref={modalRef}>
          <EditTaskBtn task={task} updateTask={updateTask} onClose={handleClose}/>
            <hr />
            <DeleteTaskBtn task={task} onDelete={onDelete}/>
          </div>
        </div>
      )}
    </>
  );
}

export default ActionBtn;
