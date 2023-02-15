import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleActivity = (props) => {
    const { activities } = props;
    const id = Number(useParams().id);
    const activity = activities.find(activity => activity.id === id);
    console.log(activity);

    if(!activity) {
        return (
            <h1>Oops! Page Not Found!</h1>
        )
    } else {
        return (
            <div id='singleActivity'>
                <h1><Link to='/activities'>{activity.name}</Link></h1>
                <h2>{activity.description}</h2>
            </div>
        )
    }
}

export default SingleActivity;

//import SingleActivity from './components/SingleActivity';
//// const [activities, setActivities] = useState([]);

//const fetchAllActivities = () => {
//     fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     }).then(response => response.json())
//         .then(result => {
//             console.log(result);
//             setActivities(result);
//         })
//         .catch(console.error);
// };

// useEffect(() => {
//     fetchAllActivities();
//   }, [])

//<Route path='/activities/:id' element={
//          <SingleActivity activities={activities}/>
//       } />

// #singleActivity {
//     background-color: greenyellow;
//     border-radius: 1rem;
//     margin: 1rem;
//   }