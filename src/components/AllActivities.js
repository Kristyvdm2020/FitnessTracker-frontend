import React from 'react';
import { Link } from 'react-router-dom';

const AllActivities = (props) => {
    const { activities } = props;

    return (
        <div id='activities-collection'>
            <h1>Activities</h1>
            <ul id='activities'>
                {
                    activities.map(activity => {
                        return (
                            <li key={activity.id}>
                                <Link to={`/activities/${activity.id}`}>{activity.name}</Link>
                                : {activity.description}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default AllActivities;

//import AllActivities from './components/AllActivities';
// const [activities, setActivities] = useState([]);
//<Route path='/activities' element={
//          <AllActivities activities={activities}/>
//       } />