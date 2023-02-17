import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { attachActivityToRoutine } from '../api/fetch';

const MyOneRoutine = (props) => {
    const { myRoutines, activities } = props;
    const [selectedActivityId, setSelectedActivityId] = useState('');
    const [count, setCount] = useState('');
    const [duration, setDuration] = useState('');
    const id  = Number(useParams().id);
    const routine = myRoutines.find(routine => routine.id === id);

    const addActivity = async(ev) => {
        ev.preventDefault();
        const activity = await attachActivityToRoutine(id, selectedActivityId, count, duration); 
        //need to figure out how to refresh the list and make it appear on the page....
        //it does add the activity to the page.
    }

    if(!routine) {
        return (
            <h1>Oops! Page Not Found!</h1>
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
                            onChange={(ev) => {
                                console.log(ev.target.value)
                                setSelectedActivityId(Number(ev.target.value))
                            }}>
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

                        <button disabled={selectedActivityId === '' || count === '' || duration === ''}>
                            Add Activity</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default MyOneRoutine