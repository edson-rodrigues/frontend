import React, {useState} from 'react'

const TaskComplete = (props) =>{
    const [isChecked, setIsChecked] = useState(true)
    
    const onCheck = (event) =>{      
        setIsChecked(() => {
            if(isChecked === false){
                return true
            }
            else{
                return false
            }
        }
        )
        props.taskState(isChecked)
    }

    
    return (
    <>
        <input onClick={onCheck} type="checkbox" id="done"/>
        <label htmlFor="done">Done</label>
    </>
    )
}

export default TaskComplete