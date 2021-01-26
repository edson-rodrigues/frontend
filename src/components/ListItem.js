import React from 'react'

import TaskDescription from './TaskDescription'
import TaskComplete from './TaskComplete'
import TaskEdit from './TaskEdit'
import TaskDelete from './TaskDelete'


const ListItem = ()=>{
    const taskIsCompleted = (isCompleted) =>{
        return(isCompleted)
    }
    
    let checkboxIsChecked = taskIsCompleted
    
    return (
        <div className="list-item">
            <TaskDescription taskState={taskIsCompleted}/>
            <TaskComplete taskState={checkboxIsChecked}/>
            <TaskEdit />
            <TaskDelete/>               
        </div>
    )
}

export default ListItem