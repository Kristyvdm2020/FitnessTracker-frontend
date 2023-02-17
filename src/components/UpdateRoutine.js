import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateMyRoutine, fetchUsernameRoutines } from '../api/fetch';

const UpdateRoutine = (props) => {
    const { user, myRoutines, setMyRoutines, setEditForm } = props;
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState('');
    const [error, setError] = useState({});
    const id  = Number(useParams().id);
    let routine = myRoutines.find(routine => routine.id === id);

    const editRoutine = async(ev) => {
        ev.preventDefault();
        const passedInObj = {
            routineId: id
        }
        if(name !== '') {
            passedInObj.name = name;
        }
        if(goal !== '') {
            passedInObj.goal = goal;
        }
        if(isPublic !== '') {
            passedInObj.isPublic = isPublic;
        }
        const newRoutine = await updateMyRoutine(passedInObj);
        console.log(newRoutine);
        if(!newRoutine.error) {
            const allMyRoutines = await fetchUsernameRoutines(user.username);
            setMyRoutines(allMyRoutines);
            routine = myRoutines.find(routine => routine.id === id);
            clearForm();
            setEditForm(false);
        } else {
            setError(newRoutine);
        }
    }

    const clearForm = () => {
        setName('');
        setGoal('');
        setIsPublic('');
        setError({});
    }

    if(!routine) {
        return (
            <h1>You have not created any routines</h1>
        )
    } else {
        return(
            <>
                <form onSubmit={editRoutine}>
                    <input
                        placeholder="name"
                        value={name}
                        onChange={(ev) => setName((ev.target.value))}
                    />
                    <input
                        placeholder="goal"
                        value={goal}
                        onChange={(ev) => setGoal((ev.target.value))}
                    />
                    <select
                        value={isPublic}
                        onChange={(ev) => setIsPublic(ev.target.value)}>
                        <option value="true">Public</option>
                        <option value="false">Private</option>
                    </select>
                    <button type="submit">Finish</button>
                </form> 
                {error.message && <p>{error.message}</p>} 
            </>  
        )
    }
}

export default UpdateRoutine;