import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddActivityToRoutine from './AddActivitiyToRoutine';
import UpdateRoutine from './UpdateRoutine';
import { updateRoutineActivity, deleteRoutineActivity, fetchUsernameRoutines } from '../api/fetch';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';


const MyOneRoutine = (props) => {
    const { user, myRoutines, activities, setMyRoutines } = props;
    const [editRoutineForm, setEditRoutineForm] = useState(false);
    const [editActivityForm, setEditActivityForm] = useState(false);
    const [count, setCount] = useState('');
    const [duration, setDuration] = useState('');
    const [routineActivityId, setRoutineActivityId] = useState(0);
    const [editedActivity, setEditedActivity] = useState('');
    const [error, setError] = useState({});
    const id  = Number(useParams().id);
    let routine = myRoutines.find(routine => routine.id === id);

    const editRoutineActivity = async (ev) => {
        ev.preventDefault();
        const passedInObj = {
            routineActivityId: routineActivityId
        }
        if (count !== '') {
            passedInObj.count = count;
        }
        if (duration !== '') {
            passedInObj.duration = duration;
        }
        const response = await updateRoutineActivity(passedInObj);
        if (!response.error) {
            const allMyRoutines = await fetchUsernameRoutines(user.username);
            setMyRoutines(allMyRoutines);
            routine = myRoutines.find(routine => routine.id === id);
            clearForm();
            setEditActivityForm(false);
        } else {
            setError(response);
        }
    }

    const deleteActivityFromRoutine = async (ev, id) => {
        let response = await deleteRoutineActivity(id);
        if (!response.error) {
            const allMyRoutines = await fetchUsernameRoutines(user.username);
            setMyRoutines(allMyRoutines);
            routine = myRoutines.find(routine => routine.id === id);
            console.log("success!");
        } else {
            setError(response);
        }
    }

    const setUpEditActivityForm = async (ev, id, name) => {
        setRoutineActivityId(id);
        setEditActivityForm(true);
        setEditedActivity(name);
    }

    const clearForm = () => {
        setCount('');
        setDuration('');
    }

    if(!routine) {
        return (
            <h1>You have not created any routines</h1>
        )
    } else {
        return(
            <div id='singleRoutine'>
                <h1><Link to='/myRoutines'>{routine.name}</Link>
                    <button value="true" className='big-edit-btn' onClick={() => {setEditRoutineForm(!editRoutineForm)}}><FaEdit /></button>
                </h1>
                <h3>{routine.goal}</h3>
                { editRoutineForm ? <UpdateRoutine user={user} myRoutines={myRoutines} setMyRoutines={setMyRoutines} setEditRoutineForm={setEditRoutineForm}/> :null}
                <p><b>Activities({routine.activities.length})</b></p>
                <ul>
                    {routine.activities.map(activity => {
                        return (<li key={activity.id}>{activity.name}(Count:{activity.count} Duration:{activity.duration})
                            <button
                                value={activity.routineActivityId}
                                className='delete-btn'
                                onClick={(ev) => deleteActivityFromRoutine(ev, activity.routineActivityId)}><FaTrashAlt /></button>
                            <button
                                value={activity.routineActivityId}
                                className='edit-btn'
                                onClick={(ev) => setUpEditActivityForm(ev, activity.routineActivityId, activity.name)}><FaEdit /></button>

                            <p>{activity.description}</p>
                            {error.message && <p>{error.message}</p>}
                            
                        </li>)
                    })}
                </ul>
                <>
                {editActivityForm ?
                    <form onSubmit={editRoutineActivity}>
                        <h3>Change Count or Duration of {editedActivity}</h3>
                        <p>Count:</p>
                        <input
                            placeholder="count"
                            value={count}
                            onChange={(ev) => setCount(Number(ev.target.value))}
                        />
                        <p>Duration:</p>
                        <input
                            placeholder="duration"
                            value={duration}
                            onChange={(ev) => setDuration(Number(ev.target.value))}
                        />

                        <button className='small-btn' type="submit">Done!</button>
                    </form>
                    : null}
                </>
                <AddActivityToRoutine user={user} myRoutines={myRoutines} activities={activities} setMyRoutines={setMyRoutines} />
            </div>
        )
    }
}

export default MyOneRoutine