import { ADD_TODO, DELETE_TODO } from "../actions/actions.types"

const initialState = []

const todoOperations = (state=initialState, action)=>{
    if(action.type === ADD_TODO){
        // add todo
        return [...state, action.payload]
    }else if (action.type === DELETE_TODO){
        state.filter((todo, id)=>{
            return id !== action.payload
        })
    }else{
        return state
    }
}

export default todoOperations