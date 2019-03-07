import {
    ADD_TODO,
    MARK_COMPLETE,
    DELETE_TODO,
    CLEAR_COMPLETED,
    ACTIVE
} from '../actions';
import todos from '../todos.json';

const initialState = {
    todos
};

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos, {
                        userId: 1,
                        id: (state.todos.length + 1),
                        title: action.text,
                        completed: false
                    }
                ]
            };
        case MARK_COMPLETE:
            return {
                ...state,
                todos: [
                    ...state.todos.map(todo => todo.id === action.id ? {
                        ...todo,
                        completed: !todo.completed
                    } : todo)
                ]
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos.filter(todo => todo.id !== action.id)
                ]
            };
        case CLEAR_COMPLETED:
            return {
                ...state,
                todos: [
                    ...state.todos.filter(item => item.completed === false)
                ]
            };
        case ACTIVE:
            return {
                ...state,
                todos: [
                    ...state.todos.filter(item => item.completed === false)
                ]
            };
        default:
            return state;
    }
};