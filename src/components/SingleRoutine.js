import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleRoutine = (props) => {
    const { routines } = props;
    const id  = Number(useParams().id);
    const routine = routines.find(routine => routine.id === id);

    if(!routine) {
        return (
            <h1>Oops! Page Not Found!</h1>
        )
    } else {
        return (
            <div id='singleRoutine'>
                <h1><Link to='/routines'>{routine.name}</Link> by {routine.creatorName}</h1>
                <h2>{routine.goal}</h2>
                <h2>Activities({routine.activities.length})</h2>
                <ul>
                    {routine.activities.map(activity => {
                        return (<li key={activity.id}>{activity.name}(Count:{activity.count} Duration:{activity.duration})
                        <p>{activity.description}</p></li>)})}
                </ul>
            </div>
        )
    }
}

export default SingleRoutine

//Bri, could we maybe see more info (like the creatorName and any other parts of the routine object that you
//find interesting?)