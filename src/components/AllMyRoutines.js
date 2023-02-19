import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {fetchUsernameRoutines, deleteRoutine} from '../api/fetch';



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
            <ul id='routines'>
            <Link to='/newroutine'><button className='login-btn'>New Routine</button></Link>
                {
                    myRoutines.map(routine => {
                        return (
                            <li key={routine.id}>
                                <Link to={`/myRoutines/${routine.id}`}>{routine.name}</Link> <button value="hi" onClick={() => deleteMyRoutine(routine.id)}>Delete</button> </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default AllMyRoutines