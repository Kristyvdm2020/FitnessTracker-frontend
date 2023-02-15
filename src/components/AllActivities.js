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

//import AllActivities from './components/AllActivities';
// const [activities, setActivities] = useState([]);

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
//<Route path='/activities' element={
//          <AllActivities activities={activities}/>
//       } />

// #activities-collection {
//     font-size: 1rem;
//   }
  
//   #activities {
//     list-style-type: none;
//   }
  
//   #activities > li {
//     /* background-color: greenyellow;
//     border-radius: 1rem; */
//     margin: 1rem;
//   }