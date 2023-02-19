import React, {useState} from "react";
import {fetchUsernameRoutines, createRoutine} from '../api/fetch';
import { useParams  } from 'react-router-dom';


export const CreateRoutine = (props) => {
    const [name, setName] = useState('')
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false)
    const { user, myRoutines, setMyRoutines } = props;
    const [message, setMessage] = useState({});
    const id  = Number(useParams().id);
    let routine = myRoutines.find(routine => routine.id === id);

    
    const newRoutine = async (ev) => {
        ev.preventDefault();
        const response = await createRoutine(name, goal, isPublic);
        if (!response.error) {
            const allMyRoutines = await fetchUsernameRoutines(user.username);
            setMyRoutines(allMyRoutines);
            routine = myRoutines.find(routine => routine.id === id);
            clearForm();
            setMessage({message: "Success!"});
            const redirectToRoutines = () => {
                window.location.href = '/#/myroutines'
            }
            redirectToRoutines();
        } else {
            setMessage(response);
        }
    }

    const clearForm = () => {
        setName('');
        setGoal('');
        setIsPublic(false);
    }

return (
    <div className="form-card">
        <h1>Create a new routine here!</h1>
        <form onSubmit={newRoutine}>
        <p />
        <input placeholder="name" value={name} onChange = {(ev) => 
            setName(ev.target.value)}></input>
        <p />
        <input placeholder="goal" value={goal} onChange = {(ev) => 
            setGoal(ev.target.value)}></input>
        <p />
        <input placeholder="true or false" value={isPublic} onChange = {(ev) => 
            setIsPublic(ev.target.value)}></input>
        <p />
        <button className="btn" type="submit">New Routine</button>
        </form>
        {message.message && <p>{message.message}</p>}
    </div>

)
}