import { SET_JOB, ADD_JOB, DEL_JOB } from "./constants";

const initState = {
    todos: [],
    todoInput: ''
}

const reducer = (state, action) => {
    switch(action.type) {
        case SET_JOB:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DEL_JOB:
            return {
                ...state,
                todos: state.todos.filter((_, ind) => ind !== action.payload)
            }
        default:
            throw new Error('Invalid action !!')
    }
}

export {initState};
export default reducer;