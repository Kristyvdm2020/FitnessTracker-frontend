import React from 'react';
import { Link } from 'react-router-dom';

const AllActivities = (props) => {
    const { activities } = props;

    return (
        <div className='body-container' id='activities-collection'>
            <ul id='activities'>
            <Link to='/newactivity'className='new-routine'><button className='routine-btn'>New Activity</button></Link>
                {
                    activities.map(activity => {
                        return (
                            <li key={activity.id}>
                                <Link to={`/activities/${activity.id}`}>{activity.name}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default AllActivities;