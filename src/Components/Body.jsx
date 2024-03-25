import React, { useState } from 'react';
import { cardData } from '../Data';
import AddTaskBtn from './AddTaskBtn';
import OperationAria from './OperationAria'
import DisplayAria from './DisplayAria'
function Body() {
  const [tasks, setTasks] = useState({
    pending: [],
    inProgress: [],
    completed: [],
    deployed: [],
    deferred: []
  });

  const addTaskToPending = (task) => {
    setTasks(prevTasks => ({
      ...prevTasks,
      pending: [...prevTasks.pending, task]
    }));
  };
  return (
    <>
         <section className="body">
            <div className="body-container">
            <OperationAria addTaskToPending={addTaskToPending} />
            <DisplayAria tasks={tasks} heading={cardData}/>
            </div>
         </section>
    </>
  )
}

export default Body