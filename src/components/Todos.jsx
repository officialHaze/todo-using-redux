import { useSelector } from "react-redux"

function Todos() {
    const todos = useSelector((state)=>state.todoOperations)
    console.log(todos)
  return (
    <div>
        {todos.map((todo, i)=>{
            return <div key={i}>
                    {todo}
                   </div>
        })}
    </div>
  )
}

export default Todos