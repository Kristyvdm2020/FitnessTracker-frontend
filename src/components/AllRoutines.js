import React from 'react';
import { Link } from 'react-router-dom';


const AllRoutines = (props) => {
    const { routines } = props;

    return (
        <div className='body-container' id='routines-collection'>
            <ul id='routines'>
                {
                    routines.map(routine => {
                        return (
                            <li key={routine.id}>
                                <Link to={`/routines/${routine.id}`}>{routine.name}</Link> by {routine.creatorName}:
                                <p>{routine.goal}</p></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default AllRoutines;