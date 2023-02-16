import React from 'react';
import { Link } from 'react-router-dom';

const AllMyRoutines = (props) => {
    const { myRoutines } = props;
    console.log(myRoutines);
    return (
        <div>My Routines</div>
    )
}

export default AllMyRoutines