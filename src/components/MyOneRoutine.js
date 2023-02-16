import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const MyOneRoutine = (props) => {
    const { myRoutines, activities, setActivities } = props;
    const [selectedActivity, setSelectedActivity] = useState('');
    const id  = Number(useParams().id);
    const routine = myRoutines.find(routine => routine.id === id);

    if(!routine) {
        return (
            <h1>Oops! Page Not Found!</h1>
        )
    } else {
        return(
            <div id='singleRoutine'>
                <h1><Link to='/routines'>{routine.name}</Link></h1>
                <h2>{routine.goal}</h2>
                <h2>Activities({routine.activities.length})</h2>
                <ul>
                    {routine.activities.map(activity => {
                        console.log(activity)
                        return (<li key={activity.id}>{activity.name}(Count:{activity.count} Duration:{activity.duration})
                        <p>{activity.description}</p></li>)})}
                </ul>
                <h3>Add an Activity:</h3>
                <select
                    name='Activity'
                    value={selectedActivity}
                    onChange={(ev) => setSelectedActivity(ev.target.value)}>
                    <option value='any'>Add Activity</option>
                    {
                        activities.map(activity => {
                            return (
                                <option key={activity.id}>{activity.name}</option>
                            )
                        })
                    }
                </select>
            </div>
        )
    }
}

export default MyOneRoutine