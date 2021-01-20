import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {GET_USERS} from "./user.action";


export default function App(){

    let state = useSelector(state=> state)

    let dispatch = useDispatch();

    useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                dispatch({type:GET_USERS, payload:value})
            });
    },[dispatch]);

    return(
        <div>
            {
                state.map(user=> (<div>{user.name}</div>))
            }

        </div>
    )

}

