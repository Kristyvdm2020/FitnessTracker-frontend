//ready API functions actively used in our app
//GET /api/users/me
//Working to figure out where to put the user
const getUser = async (token) => {
    try {
        let response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        let result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

//GET /api/activities 
const fetchAllActivities = async () => {
    try {
        let response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        let result = await response.json();
        return result;
    } catch (error) {
        console.error("Uh oh, trouble fetching Activities");
    }
};

//GET /api/routines
const fetchAllRoutines = async () => {
    try {
        let response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        let result = await response.json();
        return result;
    } catch (error) {
        console.error("Uh oh, trouble fetching Routines");
    }
};

//GET /api/users/:username/routines
const fetchUsernameRoutines = async(username) => {
    try {
        const token = window.localStorage.getItem('token');
        let response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        let result = await response.json();
        return result;
    } catch (error) {
        console.error("Uh oh, trouble fetching ", username, " Routines");
    }
}

//POST /api/routines/:routineId/activities 
const attachActivityToRoutine = async(routineId, activityId, count, duration) => {
    try {
        let response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}/activities`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              activityId: activityId,
              count: count, 
              duration: duration
            })
          })
        let result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        console.error("Uh oh, trouble attaching activity to routine");
    }
}

//PATCH /api/routines/:routineId (**)
const updateMyRoutine = async ({routineId, ...fields}) => {
    try {
        const token = window.localStorage.getItem("token");
        let response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({...fields})
        })
        let result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        console.error('Uh oh, trouble updating the routine');
    }
}

//User fetch requests
//POST /api/users/register
const registerUser = async (username, password) => {
    try {
        let response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        let result = await response.json();
        if (result.error) {
            throw result.error;
        }
        return result;
    } catch (error) {
        console.error("Uh oh, trouble registering user");
    }
};

//POST /api/users/login 
const loginUser = async(username, password) => {
    try {
        let response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
          let result = await response.json();
          if (result.error) {
            throw result.error;
        }
        const token = result.token;
        window.localStorage.setItem('token', token);
        return result;
    } catch (error) {
        console.error("Uh oh, trouble logging in user");
    }
};


//Activities fetch requests
//POST /api/activities (*)
const createActivity = async (name, description) => {
    try {
        const token = window.localStorage.getItem("token");
        let response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: name,
                description: description
            })
        })
        let result = await response.json();
        if (result.error) {
            throw result.error;
        }
        console.log(result);
        return result;
    } catch (error) {
        console.error("Uh oh, trouble creating activity");
    }
}

//GET /api/activities/:activityId/routines
const fetchRoutinesFeaturingActivity = async (activityId) => {
    try {
        let response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${activityId}/routines`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        let result = await response.json();
        if (result.error) {
            throw result.error;
        }
        return result;
    } catch (error) {
        console.error("Uh oh, trouble fetching routines featuring this activity");
    }
};


//POST /api/routines (*)
const createRoutine = async (name, goal, isPublic) => {
    try {
        const token = window.localStorage.getItem("token");
        let response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: name,
                goal: goal,
                isPublic: isPublic
            })
        })
        let result = await response.json();
        if (result.error) {
            throw result.error;
        }
        return result;
    } catch (error) {
        console.log(error);
        console.error("Uh oh, trouble creating routine");
    }
}

//PATCH /api/routine_activities/:routineActivityId (**)
//Something is not quite right here yet...just letting you know
const updateRoutineActivity = async ({routineActivityId, ...fields }) => {
    try {
        const token = window.localStorage.getItem("token");
        let response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routine_activities/${routineActivityId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({...fields})
        });
        let result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        console.error("Error updating the activity count or duration");
    }
}

//DELETE /api/routine_activities/:routineActivityId (**)
const deleteRoutineActivity = async (id) => {
    try {
        const token = window.localStorage.getItem("token");
        let response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routine_activities/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        let result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        console.error("Error deleting routine activity");
    }
}


const deleteRoutine = async (id) => {
    try {
        const token = window.localStorage.getItem("token");
        let response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        let result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        console.error("Error deleting routine");
    }
}



module.exports = 
{ 
    registerUser, 
    loginUser, 
    getUser, 
    fetchUsernameRoutines, 
    fetchAllActivities, 
    createActivity,
    fetchRoutinesFeaturingActivity, 
    fetchAllRoutines, 
    createRoutine, 
    attachActivityToRoutine,
    updateMyRoutine,
    updateRoutineActivity, 
    deleteRoutineActivity,
    deleteRoutine
};