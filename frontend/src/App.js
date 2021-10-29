import React, {useState, useEffect} from 'react'
import Unassigned from './components/Unassigned.js'
import Todo from './components/Todo'
import Done from './components/Done'
import {Switch, Route, Link} from 'react-router-dom'
import TaskDataServices from './api/index.js'

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        retrieveTasks()
    },[]);

    const retrieveTasks = () => {
        TaskDataServices.getAll()
          .then(response => {
            console.log("tasks " + response.data);
            setTasks(response.data.tasks);
        })
        .catch(e => {
            console.log(e)
        })
    }
    return (
        <div>
        <h3>Tasks:</h3>
        {tasks.map((val) => {
            return <p>{val}</p>
        })}
            <Unassigned/>
            <Todo/>
            <Done/>
        </div>
    )
}

export default App
