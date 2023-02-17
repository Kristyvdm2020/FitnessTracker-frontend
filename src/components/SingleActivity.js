import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleActivity = (props) => {
    const { activities } = props;
    const id = Number(useParams().id);
    const activity = activities.find(activity => activity.id === id);
    //console.log(activity);

    if(!activity) {
        return (
            <h1>Oops! Page Not Found!</h1>
        )
    } else {
        return (
            <div className='body-container' id='singleActivity'>
                <h1><Link to='/activities'>{activity.name}</Link></h1>
                <h2>{activity.description}</h2>
            </div>
        )
    }
}

export default SingleActivity;