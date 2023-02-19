import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {fetchUsernameRoutines, deleteRoutine} from '../api/fetch';
import { FaTrashAlt } from 'react-icons/fa';



const AllMyRoutines = (props) => {
    const { user, myRoutines, setMyRoutines } = props;
    const [error, setError] = useState({});
    const id  = Number(useParams().id);
    let routine = myRoutines.find(routine => routine.id === id);

    const deleteMyRoutine = async (ev) => {
        let response = await deleteRoutine(Number(ev));
        if (!response.error) {
            const allMyRoutines = await fetchUsernameRoutines(user.username);
            setMyRoutines(allMyRoutines);
            routine = myRoutines.find(routine => routine.id === id);
        } else {
            console.log(error)
            setError(response);
        }
    }

    return (
        <div className='body-container' id='routines-collection'>
            {user.username ?
                <ul id='routines'>
                    <Link to='/newroutine' className='new-routine'><button className='routine-btn'>New Routine</button></Link>
                    {
                        myRoutines.map(routine => {
                            return (
                                <li key={routine.id}>
                                    <Link to={`/myRoutines/${routine.id}`}>{routine.name}</Link> <button className='delete-btn' onClick={() => deleteMyRoutine(routine.id)}><FaTrashAlt /></button> </li>
                            )
                        })
                    }
                </ul>
                : null}
        </div>
    )
}

export default AllMyRoutines