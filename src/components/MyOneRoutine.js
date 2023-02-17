import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { attachActivityToRoutine, fetchUsernameRoutines } from '../api/fetch';

const MyOneRoutine = (props) => {
    const { user, myRoutines, activities, setMyRoutines } = props;
    const [selectedActivityId, setSelectedActivityId] = useState('');
    const [count, setCount] = useState('');
    const [duration, setDuration] = useState('');
    const id  = Number(useParams().id);
    let routine = myRoutines.find(routine => routine.id === id);

    const addActivity = async(ev) => {
        ev.preventDefault();
        const response = await attachActivityToRoutine(id, selectedActivityId, count, duration);
        if (response) {
            const allMyRoutines = await fetchUsernameRoutines(user.username);
            setMyRoutines(allMyRoutines);
            routine = myRoutines.find(routine => routine.id === id);
            clearForm();
        }
    }

    const clearForm = () => {
        setSelectedActivityId('');
        setCount('');
        setDuration('');
    }

    if(!routine) {
        return (
            <h1>You have not created any routines</h1>
        )
    } else {
        return(
            <div className='body-container' id='singleRoutine'>
                <h1><Link to='/myRoutines'>{routine.name}</Link></h1>
                <h2>{routine.goal}</h2>
                <h2>Activities({routine.activities.length})</h2>
                <ul>
                    {routine.activities.map(activity => {
                        return (<li key={activity.id}>{activity.name}(Count:{activity.count} Duration:{activity.duration})
                        <p>{activity.description}</p></li>)})}
                </ul>
                <h3>Add an Activity:</h3>
                <div>
                    <form onSubmit={ addActivity }>
                        <select
                            name='Activity'
                            value={selectedActivityId}
                            onChange={(ev) => {setSelectedActivityId(Number(ev.target.value))}}>
                            <option value='any'></option>
                            {
                                activities.map(activity => {
                                    return (
                                        <option value={activity.id} key={activity.id}>{activity.name}</option>
                                    )
                                })
                            }
                        </select>
                        <input
                            placeholder="count"
                            value={count}
                            onChange={(ev) => setCount(Number(ev.target.value))}
                        />
                        <input
                            placeholder="duration"
                            value={duration}
                            onChange={(ev) => setDuration(Number(ev.target.value))}
                        />

                        <button disabled={selectedActivityId === '' || count === '' || duration === ''} type="submit">
                            Add Activity</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default MyOneRoutine