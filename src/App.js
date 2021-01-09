import React, {Component} from 'react';
import {useDispatch, useSelector} from "react-redux";
import User from "./User";

export default function App(){
    let state = useSelector((test) => test);
    let dispatch = useDispatch();

    let addSomething = (e) => {
        e.preventDefault();
        dispatch ({
            type: 'ADD',
            payload: {
                id: new Date().getTime(),
                name: e.target[0].value
            }
        });
    }

    return (
            <div>
                <form onSubmit={addSomething}>
                    <input type="text"/>
                    <button>click</button>
                </form>

                <div>
                    {
                        state.map(user => <User key={user.id} item={user}/>)
                    }
                </div>

            </div>
    );

}
