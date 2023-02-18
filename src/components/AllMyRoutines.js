import React from 'react';
import { Link } from 'react-router-dom';



const AllMyRoutines = (props) => {
    const { myRoutines } = props;
    return (
        <div className='body-container' id='routines-collection'>
            <ul id='routines'>
            <Link to='/newroutine'><button className='login-btn'>New Routine</button></Link>
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