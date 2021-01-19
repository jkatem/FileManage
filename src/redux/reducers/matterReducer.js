import { FETCH_MATTERS } from '../actions/mattersActions'; 
let initialState = {
    matters: [],
    loading: false,
    showModal: false
}

const matterReducer = (state = initialState, action) => {

    switch(action.type) {

        case "FETCH_MATTERS":
            // debugger 
            return {
                ...state,
                matters: action.payload,
                loading: false                
            }

        case "ADD_MATTER":
            return { 
                ...state,
                matters: [...state.matters, action.payload]
                // matters: action.payload
            }
        
        case "DELETE_MATTER":
            // debugger
            // console.log(state)
            const matters = state.matters.filter(matter => matter.id !== action.payload.id)
            // console.log(action);
            return {
                ...state, matters
            }
        
        default:
            return state
    }
}

export default matterReducer;

/*
'./Reducers.js'

import { CREATE_TODO, REMOVE_TODO } from './actions';

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const {text } = payload;
            const newTodo = {
                text,
                isCompleted: false,
            };
        }
    }
}

*********************************
action.js

export const CREATE_TODO= 'CREATE_TODO';
export const createTODO = text => ({
    type: CREATE_TODO,
    payload: { text },
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text },
})

*********************************
'store.js'
    import { createStore, combineReducers}


*/