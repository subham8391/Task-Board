import React, { useState, useEffect, useRef } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import EditTaskBtn from './EditTaskBtn';
import DeleteTaskBtn from './DeleteTaskBtn';

function ActionBtn({ idName,task,updateTask,onDelete}) {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleActionClick = (event) => {
    event.stopPropagation(); 
    setShowModal(true);
  };

  return (
    <>
      <button className='action' onClick={handleActionClick}>
        <BsThreeDotsVertical />
      </button>

      {showModal && (
        <div className="action-modal">
          <div className={`action-content ${idName}`} ref={modalRef}>
          <EditTaskBtn task={task} updateTask={updateTask} />
            <hr />
            <DeleteTaskBtn task={task} onDelete={onDelete}/>
          </div>
        </div>
      )}
    </>
  );
}

export default ActionBtn;
