import React, {Component} from 'react';
import {useDispatch, useSelector} from "react-redux";

export default function App(){
    let selector = useSelector((test)=>test);
    console.log(selector);

    let dispatch = useDispatch();

    let addSomething = () =>{
        let action = {type: 'ADD', payload: {
                id: new Date().getTime(),
                name: 'Vasya'
            }}
        dispatch({action})//processes my action
    }

    return (
            <div>
                <button onClick={addSomething}>click</button>
            </div>
    );

}
