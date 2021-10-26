import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

//passing e, onDelete, onToggle as props
const Task_two = ({e, onDelete, onToggle}) => {
    return (
        <div className={`task ${e.reminder ? "reminder" : ""}`} onDoubleClick={()=>onToggle(e.id)}>
            <h3>
            {e.text} 
            <DeleteIcon 
            style={{color: "red", cursor: "pointer"}}
            onClick={() => onDelete(e.id)} />
            </h3>
            <p>{e.day}</p>
        </div>
    )
}

export default Task_two

