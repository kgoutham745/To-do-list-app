import TasksList from "./TasksList";
import React from 'react';   

function Tasks() {
    let tasksObj = localStorage.getItem('toDoListApp');
    tasksObj = JSON.parse(tasksObj);
    const tasksList = tasksObj;  

  return (
    <div className="card m-5">
      <div className="card-header align-center">List of Tasks</div>
      <div className="card-body d-flex align-items-center justify-content-center">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody id="tasksTable">
            { tasksList && <TasksList tasksList = { tasksList }></TasksList>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Tasks;
