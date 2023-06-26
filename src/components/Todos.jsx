import { useSelector, useDispatch } from "react-redux"
import { DELETE_TODO } from "../redux/actions/actions.types"

function Todos() {
    const todos = useSelector((state)=>state.todoOperations)
    const dispatch = useDispatch()
    console.log(todos)
  return (
    <div>
        {todos.map((todo, i)=>{
            return <div key={i} >
                      {todo}
                      <button onClick={()=>{dispatch({
                        type: DELETE_TODO,
                        payload: i,
                      })}}
                      style={{margin: '0 1rem'}}
                      >delete</button>
                   </div>
        })}
    </div>
  )
}

export default Todos