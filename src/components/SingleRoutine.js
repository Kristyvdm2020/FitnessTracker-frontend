import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleRoutine = (props) => {
    const { routines } = props;
    const id  = Number(useParams().id);
    const routine = routines.find(routine => routine.id === id);
    console.log(routine);

    if(!routine) {
        return (
            <h1>Oops! Page Not Found!</h1>
        )
    } else {
        return (
            <div id='singleRoutine'>
                <h1><Link to='/routines'>{routine.name}</Link></h1>
                <h2>{routine.goal}</h2>
            </div>
        )
    }
}

export default SingleRoutine