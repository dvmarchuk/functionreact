import {createStore} from 'redux'
import {users} from "./Data";

let reducer = (state = users, action) =>{
    switch(action.type){
        case 'ADD':
            state.push(action.payload)
            return[...state];

        case 'REM':
            let filteredUsersArray = state.filter(value => value.id != action.payload.id);
            return [...filteredUsersArray];

        case 'FIND':
            let findUser = state.find(value => value.id == action.payload.id);
            return [findUser];

        default:
            return state;
    }

};

export let store = createStore(reducer)