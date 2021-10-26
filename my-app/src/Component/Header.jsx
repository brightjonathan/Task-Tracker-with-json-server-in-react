import React from 'react'
//created a btn and pass it as a props
import Button from './Button'

const Header = ({onAdd, showAddbtn}) => {

    // const onclick = ()=> {
    //     console.log("Hello... w")
    // }

    return (
        <div className="header">
            <h1>Task Tracker</h1>
            <Button color={showAddbtn ? "red" : "green"} text={showAddbtn ? "close" : "Add"} onClick={onAdd}/>
        </div>
    )
}

export default Header
