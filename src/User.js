import {useDispatch} from "react-redux";

export default function User({item}){

    let dispatch = useDispatch();

    let remUser = () =>{
        let {id} = item;
        let action = {
            type : 'REM',
            payload : {id}
        };

        dispatch(action)
    };
    return(
        <div>
            {item.id}
            {item.name}
            <button onClick={remUser}>Remove</button>
        </div>
     );
}