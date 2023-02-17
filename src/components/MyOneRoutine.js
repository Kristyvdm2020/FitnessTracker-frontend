import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddActivityToRoutine from './AddActivitiyToRoutine';
import UpdateRoutine from './UpdateRoutine';

const MyOneRoutine = (props) => {
    const { user, myRoutines, activities, setMyRoutines } = props;
    const [editForm, setEditForm] = useState(false);
    const id  = Number(useParams().id);
    let routine = myRoutines.find(routine => routine.id === id);

    if(!routine) {
        return (
            <h1>You have not created any routines</h1>
        )
    } else {
        return(
            <div className='body-container' id='singleRoutine'>
                <h1><Link to='/myRoutines'>{routine.name}</Link>
                    <button value="true" onClick={() => {setEditForm(true)}}>Edit Routine</button>
                </h1>
                <h2>{routine.goal}</h2>
                { editForm ? <UpdateRoutine user={user} myRoutines={myRoutines} setMyRoutines={setMyRoutines} setEditForm={setEditForm}/> :null}
                <h2>Activities({routine.activities.length})</h2>
                <ul>
                    {routine.activities.map(activity => {
                        return (<li key={activity.id}>{activity.name}(Count:{activity.count} Duration:{activity.duration})
                            <p>{activity.description}</p></li>)
                    })}
                </ul>
                <AddActivityToRoutine user={user} myRoutines={myRoutines} activities={activities} setMyRoutines={setMyRoutines} />
            </div>
        )
    }
}

export default MyOneRoutine