import React from 'react'
function DisplayAria({ tasks,heading }) {
  return (
    <>
      <section className="dp-section">
        {Object.keys(tasks).map((key) => (
          <div className="c-card" key={key}>
            <div className="ch-name" id={heading[key].toLowerCase()}>{heading[key]}</div>
            <div className="c-content">
              {tasks[key].map((task, index) => (
                <div className="task" key={index}>
                  <div className="t-head">
                  <p>Task {index+1}</p>
                  <p style={{backgroundColor:'blue',color:'white'}}>{task.priority}</p>
                  </div>
                  <hr />
                  <p>{task.title}</p>
                  <p>{task.description}</p>
                  {/* Add more task details as needed */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default DisplayAria;