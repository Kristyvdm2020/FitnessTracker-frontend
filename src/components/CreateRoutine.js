import React, {useState} from "react";
import {fetchUsernameRoutines, createRoutine} from '../api/fetch';
import { Link, useParams  } from 'react-router-dom';


export const CreateRoutine = (props) => {
    const [name, setName] = useState('')
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false)
    const { user, myRoutines, setMyRoutines } = props;
    const [error, setError] = useState({});
    const id  = Number(useParams().id);
    let routine = myRoutines.find(routine => routine.id === id);

    
    const newRoutine = async (ev) => {
        ev.preventDefault();
        // await createRoutine(name, goal, isPublic);
        const response = await createRoutine(name, goal, isPublic);
        if (!response.error) {
            console.log('yay')
            const allMyRoutines = await fetchUsernameRoutines(user.username);
            setMyRoutines(allMyRoutines);
            routine = myRoutines.find(routine => routine.id === id);
            clearForm();
        } else {
            console.log(error)
            setError(response);
        }
    }

    const clearForm = () => {
        setName('');
        setGoal('');
        setIsPublic(false)
    }

return (
    <div>
        <h1>Create a new routine here!</h1>
        <form onSubmit={newRoutine}>
    
        <input placeholder="name" value={name} onChange = {(ev) => 
            setName(ev.target.value)}></input>
    
        <input placeholder="goal" value={goal} onChange = {(ev) => 
            setGoal(ev.target.value)}></input>

        <input placeholder="true or false" value={isPublic} onChange = {(ev) => 
            setIsPublic(ev.target.value)}></input>
        <button type="submit">New Routine</button>
        </form>
        
    </div>

)
}