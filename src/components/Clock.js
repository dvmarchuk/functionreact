import React, {useState, useEffect} from 'react';


export default function Clock({data: {id, offset}}){
    let [dateTime, setDateTime] = useState(new Date())
    useEffect(()=>{

    });

    return(
        <div>

        </div>
    )
}

















// export default function ClockComponent({data: {id, offset}, deleteClock}) {
//
//
//     let [dateTime, setDateTime] = useState(new Date());
//     useEffect(() => {
//         let id_interval = setInterval(() => {
//             let date = new Date();
//             date.setHours(offset);
//             setDateTime(date);
//             console.log('Clock', id);
//         }, 1000);
//
//         // analogue componentWillUnmount
//         return () => {
//             console.log('delete clock');
//             clearInterval(id_interval);
//         };
//
//
//     },[]);
//
//
//     let onDeleteClock = (id) => {
//         deleteClock(id);
//
//     };
//
//     return (
//         <div>
//             {
//                 dateTime &&
//                 <div>
//                     <h4>
//                         {dateTime.toLocaleTimeString()}
//                     </h4>
//                     <button onClick={() => onDeleteClock(id)}>delete clock</button>
//
//                 </div>
//             }
//         </div>
//     );
// }