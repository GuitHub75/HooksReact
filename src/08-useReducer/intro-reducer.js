
const initialState =[{
    id :1,
    todo :'Recolectar las piedras',
    done : false,
}];

const todoReducer = (state = initialState, action={}) => {

    if(action.type === 'add'){
        return [...state, action.payload];
    }

    console.log(state, action)
    return state;
}

let todos = todoReducer();

const newTodo = {
    id:2,
    todo: "Recolectar la piedra del poder",
    done: false
}

const addTodoAction = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

console.log({state : todos});



//console.log(todos);