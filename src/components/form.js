import { useState } from "react"
import TextField from '@mui/material/TextField';
import './form.css'
import Values from "./button";

const Form = () => {
    const [task, setTask] = useState("")
    const [data, setData] = useState([])
    const submitData = () => {
        setData([...data, { task }])
        setTask("")
    }
    const deleteData = (index) => {
        let arr = [...data]
        arr.splice(index, 1)
        setData([...arr])
    }
    return (
        <>
            <div className="form_inputs">
                <TextField id="outlined-basic"
                    label="Enter Task"
                    variant="outlined"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button onClick={submitData}>
                    Submit
                </button>
            </div>
            <h1>&#9201;</h1>
            <div className="tasks"> 
                {
                    data.map((element, index) => {
                        return (
                            <div key={index} className="task_values">
                                <Values element={element} index={index} />
                                <button className="deleteButton" onClick={()=>deleteData(index)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Form;