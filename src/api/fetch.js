//User fetch requests
//POST /api/users/register
const registerUser = (username, password) => {
    fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);
};

//POST /api/users/login 
const loginUser = (username, password) => {
    fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
};

//GET /api/users/me
const exchangeTokenForUser = (token) => {
    fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
};

//GET /api/users/:username/routines
const fetchUsernameRoutines = (username) => {
    fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

//Activities fetch requests
//GET /api/activities 
const fetchAllActivities = () => {
    fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

//GET /api/activities/:activityId/routines
const fetchRoutinesFeaturingActivity = (activityId) => {
    fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${activityId}/routines`, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
};

//Routines fetch requests
//GET /api/routines
const fetchAllPublicRoutines = () => {
    fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
};

module.exports = 
{ 
    registerUser, loginUser, exchangeTokenForUser, fetchUsernameRoutines, fetchAllActivities, fetchRoutinesFeaturingActivity, fetchAllPublicRoutines, };