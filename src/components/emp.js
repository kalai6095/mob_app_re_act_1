import React from 'react';
const emp=(props)=>{
    return (<tr>
        <td>{props.obj.id}</td>
        <td>{props.obj.name}</td>
        <td>{props.obj.sal}</td>
        <td><button onClick={props.deleteEvent}>Delete</button></td>
    </tr>)
};
export default emp;