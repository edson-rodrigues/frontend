import React, {useState} from 'react'

const TaskDescription = (props) =>{
    const [description, setDescription] = useState("Task Description")
    const [isDisable, setIsDisabled] = useState(false)

    }
    return(
            <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
    ) 

export default TaskDescription