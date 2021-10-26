import React from 'react'
//import task_two
import Task_two from './Task_two'

const Tasks = ({tasks, onDelete, onToggle}) => {

    return (
        <div>
            {tasks.map((e)=>{
                //passing it as a prose
                return <Task_two key={e.id} e={e} onDelete={onDelete} onToggle={onToggle}/>
            })}
        </div>
    )
}

export default Tasks

//brightJonathan
