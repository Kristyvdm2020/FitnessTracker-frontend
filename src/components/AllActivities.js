import React from 'react';
import { Link } from 'react-router-dom';

const AllActivities = (props) => {
    const { activities } = props;

    return (
        <div id='activities-collection'>
            <ul id='activities'>
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