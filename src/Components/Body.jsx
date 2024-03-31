import React, { useState } from 'react';
import { cardData } from '../Data';
import AddTaskBtn from './AddTaskBtn';
import ActionBtn from './ActionBtn';

function Body() {
  const [tasks, setTasks] = useState({
    pending: [],
    inprogress: [],
    completed: [],
    deployed: [],
    deferred: []
  });

  const [filter, setFilter] = useState({
    assignee: '',
    priority: '',
    date: ''
  });

  const [sortByPriority, setSortByPriority] = useState('');

  // Create Task
  const addTask = (taskData) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [taskData.status.toLowerCase()]: [...prevTasks[taskData.status.toLowerCase()], taskData]
    }));
  };

  // Update Task
  const updateTask = (updatedTask) => {
    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      const updatedStatus = updatedTask.status.toLowerCase();
      const previousStatus = updatedTasks[updatedStatus].filter(
        (task) => task.title !== updatedTask.title
      );

      // Remove the task from its previous status
      Object.keys(updatedTasks).forEach((status) => {
        updatedTasks[status] = updatedTasks[status].filter(
          (task) => task.title !== updatedTask.title
        );
      });

      // Push the updated task to its new status
      updatedTasks[updatedStatus] = previousStatus.concat(updatedTask);

      return updatedTasks;
    });
  };

  // Delete Task
  const deleteTask = (taskToDelete) => {
    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      const status = taskToDelete.status.toLowerCase();
      updatedTasks[status] = updatedTasks[status].filter(task => task.title !== taskToDelete.title);
      return updatedTasks;
    });
  };

  // Filtered and Sorted Tasks
  const filteredTasks = Object.keys(tasks).reduce((filtered, key) => {
    const filteredByStatus = tasks[key]
      .filter(task => {
        return (
          (filter.assignee === '' || task.assignees.toLowerCase().includes(filter.assignee.toLowerCase())) &&
          (filter.priority === '' || task.priority.toLowerCase() === filter.priority.toLowerCase())&&
          (filter.date === '' || task.dateAdded === filter.date)
        );
      })
      .sort((a, b) => {
        if (sortByPriority === 'p0') {
          return a.priority.localeCompare(b.priority);
        } else if (sortByPriority === 'p1') {
          return b.priority.localeCompare(a.priority);
        } else {
          return 0;
        }
      });

    return {
      ...filtered,
      [key]: filteredByStatus
    };
  }, {});

  const handleDateInputChange = (e) => {
    setFilter({ ...filter, date: e.target.value });
  };
  return (
    <>
      <section className="body">
        <div className="body-container">
          <section className="op-section">
            <div className="op-aria">
              <div className="op-top">
                <div className="filter">
                  <p>Filter By:</p>
                  <div className="filter-aria">
                  <input
                    type="text"
                    id="aName"
                    placeholder="Assignee Name"
                    value={filter.assignee}
                    onChange={(e) => setFilter({ ...filter, assignee: e.target.value })}
                  />
                  <select
                    id='PriorityFilter'
                    value={filter.priority}
                    onChange={(e) => setFilter({ ...filter, priority: e.target.value })}
                  >
                    <option value="">Priority</option>
                    <option value="p0">p0</option>
                    <option value="p1">p1</option>
                    <option value="p2">p2</option>
                  </select>
                  <input
                      type="date"
                      id="dateInput"
                      value={filter.date}
                      onChange={handleDateInputChange} 
                    />
                  </div>
                </div>
                <div className="top-at-btn">
                <AddTaskBtn addTask={addTask} />
                </div>
              </div>
              <div className="op-bottom">
                <p>Sort By:</p>
                <select
                id='sortByPriority'
                  value={sortByPriority}
                  onChange={(e) => setSortByPriority(e.target.value)}
                >
                  <option value="">Priority</option>
                  <option value="p0">p0</option>
                  <option value="p1">p1</option>
                  <option value="p2">p2</option>
                </select>
              </div>
            </div>
          </section>
          <section className="dp-section">
            {Object.keys(filteredTasks).map((key) => (
              <div className="c-card" key={key}>
                <div className="ch-name" id={cardData[key]}>
                  {cardData[key]}
                </div>
                <div className="c-content">
                  {filteredTasks[key].map((task, index) => (
                    <div className="task" key={index}>
                      <div className="t-head">
                        <h3>{task.title}</h3>
                        <p className="t-priority">{task.priority}</p>
                      </div>
                      <hr />
                      <p className="t-desc">{task.description}</p>
                      <div className="t-head">
                        <h5>@{task.assignees}</h5>
                        <ActionBtn
                          idName={cardData[key]}
                          task={task}
                          updateTask={updateTask}
                          onDelete={deleteTask}
                        />
                      </div>
                      <div className="status">{task.status === 'Pending' ? 'Assign' : task.status}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
          <div className="bottom-at-btn">
          <AddTaskBtn addTask={addTask} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Body;
