import React from 'react';
import { Link } from 'react-router-dom';

const MyOneRoutine = (props) => {
    const { myRoutines } = props;
    const id  = Number(useParams().id);
    const routine = myRoutines.find(routine => routine.id === id);

    if(!routine) {
        return (
            <h1>Oops! Page Not Found!</h1>
        )
    } else {
        console.log(routine.activities);
        return(
            <div id='singleRoutine'>
                <h1><Link to='/routines'>{routine.name}</Link></h1>
                <h2>{routine.goal}</h2>
                <ul>
                    {routine.activities.map(activity => {
                        console.log(activity)
                        return (<li>{activity.name}</li>)})}
                </ul>
            </div>
        )
    }
}

export default MyOneRoutine