import { useState } from "react"
import { useDispatch } from "react-redux"
import { ADD_TODO } from "../redux/actions/actions.types"


function TodoInput() {
    const [inputVal, setInputVal] = useState("")
    const dispatch = useDispatch()

    // handle change in input field
    const handleChange = (e)=>{
        const {value} = e.target
        setInputVal(value)
    }

    // handle form submit
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch({
            type: ADD_TODO,
            payload: inputVal
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={inputVal} onChange={handleChange} />
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default TodoInput