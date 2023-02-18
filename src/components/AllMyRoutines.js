import React from 'react';
import { Link } from 'react-router-dom';


const AllMyRoutines = (props) => {
    const { myRoutines } = props;
    return (
        <div className='body-container' id='routines-collection'>
            <ul id='routines'>
                {
                    myRoutines.map(routine => {
                        return (
                            <li key={routine.id}>
                                <Link to={`/myRoutines/${routine.id}`}>{routine.name}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default AllMyRoutines