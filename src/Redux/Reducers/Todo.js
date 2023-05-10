const initialState = {
    todos: [],
    loading: false
}

export const  todoReducers = (state = initialState, action)=>{
    switch(action.type){
        case "ADD_TODO":
            return {...state, todos: [...state.todos, action.payload.data] }
        case "UPDATE":
            return {...state, todos: action.payload.data};

        default:
            return  state
    }
}