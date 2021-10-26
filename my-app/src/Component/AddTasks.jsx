import {useState} from 'react'

//passing addTask as props
const AddTasks = ({addTask}) => {

    const [text, setText]= useState("")
    const [day, setday]= useState("")
    const [reminder, setReminder]= useState(false)

    //creating a function for the onsubmit 
    const handleEvent = (e) =>{
        e.preventDefault()
        
        //validating the text 
        //if not text alert()
        //not working
        if (!text) {
            alert('Please add a task')
            return
          }

        //calling the props
        addTask({text, day, reminder})

        //clearing the input
        setText("")
        setday("")
        setReminder(false)

    }

    return (
        <form className="add-form" onSubmit={handleEvent}>

         <div className="form-control" >
             <label>Tasks</label>
             <input 
             type="text" 
             required placeholder="Add to task" 
             value={text} 
             onChange={(e)=> setText(e.target.value)}/>
         </div>

         <div className="form-control">
             <label>Day and Time</label>
             <input 
             type="text" 
             required placeholder="Add Day and time" 
             value={day}
             onChange={(e)=> setday(e.target.value)}/>
         </div>

         <div className="form-control">
             <label>Reminder</label>
             <input 
             type="checkbox" 
             checked={reminder}
             value={reminder}
             onChange={(e)=> setReminder(e.currentTarget.checked)}/>
         </div>

         <input type="submit" className="btn btn-block" value="save Tasks" />

         {/* <button 
         type="submit" 
         className="btn btn-block">save Tasks</button> */}
         
        </form>
    )
}

export default AddTasks
