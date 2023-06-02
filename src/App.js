import './App.css';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Tasks from './components/Tasks';
import { useState } from 'react';


function App() {
  let tasksObj = localStorage.getItem('toDoListApp');
      if(tasksObj==null)
          tasksObj = [];
      else
          tasksObj = JSON.parse(tasksObj);
  const [tasksList, settasksList] = useState(JSON.stringify(tasksObj));
  function addTask(){
      if(document.getElementById('textInput').value.trim()==="")
        return;
      tasksObj.push({index:tasksObj.length+1,task:document.getElementById('textInput').value,status:'pending'});
      localStorage.setItem('toDoListApp',JSON.stringify(tasksObj));
      settasksList(JSON.stringify(tasksObj));
  }
  function taskFinish(idx){
    tasksObj[idx-1].status = "completed";
    localStorage.setItem('toDoListApp',JSON.stringify(tasksObj));
    settasksList(JSON.stringify(tasksObj));
  }
  function taskDelete(idx){
    tasksObj.splice(idx-1,1);
    for(let i=0; i<tasksObj.length; i++)
      tasksObj[i].index = i+1;
    localStorage.setItem('toDoListApp',JSON.stringify(tasksObj));
    settasksList(JSON.stringify(tasksObj));
  }
  return (
    <div className="App">
      <Navbar></Navbar>
      <Container handleclick={addTask}></Container>
      <Tasks tasksList={JSON.parse(tasksList)} taskFinish={taskFinish} taskDelete={taskDelete}></Tasks>
    </div>
  );
}

export default App;
