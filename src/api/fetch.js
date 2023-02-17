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
        let result = response.json();
        if (result.error) {
            throw result.error;
        }
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
        if (result.error) {
            throw result.error;
        }
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
        if (result.error) {
            throw result.error;
        }
        return result;
    } catch (error) {
        console.error("Uh oh, trouble fetching Routines");
    }
};

//GET /api/users/:username/routines
const fetchUsernameRoutines = async(username) => {
    try {
        const token = window.localStorage.getItem('token');
        //sandra is our sample for seeing any routines right now. Just replace ${username} with sandra
        let response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        let result = response.json();
        if (result.error) {
            throw result.error;
        }
        return result;
    } catch (error) {
        console.error("Uh oh, trouble fetching ", username, " Routines");
    }
}


///----------API FUNCTIONS THAT ARE NOT ACTIVELY USED ARE BELOW THIS LINE, but can be used ----------------------
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
        let result = response.json();
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
          let result = response.json();
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
        let result = response.json();
        if (result.error) {
            throw result.error;
        }
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
        let result = response.json();
        if (result.error) {
            throw result.error;
        }
        return result;
    } catch (error) {
        console.error("Uh oh, trouble fetching routines featuring this activity");
    }
};


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
};