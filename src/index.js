import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, HashRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { loginUser } from './api/fetch'; //this is only here right now for getting a token for development
import { fetchAllActivities } from './api/fetch'
import { ViewRegister } from './components/ViewRegister';
import { ViewLogin } from './components/ViewLogin';
import AllActivities from './components/AllActivities';
import SingleActivity from './components/SingleActivity';
import SingleRoutine from './components/SingleRoutine';
import AllRoutines from './components/AllRoutines';
import MyOneRoutine from './components/MyOneRoutine';
import AllMyRoutines from './components/AllMyRoutines';
import Home from './components/Home';

const App = ()=> {
 //loginUser("Kristy", "12345678");
 const [activities, setActivities] = useState([]);
 const [routines, setRoutines] = useState([]);
 const [token, setToken] = useState('');
 const [user, setUser] = useState({});
 const [myRoutines, setMyRoutines] = useState([]);

  const fetchAllRoutines = () => {
     fetch('https://fitnesstrac-kr.herokuapp.com/api/routines', {
         headers: {
             'Content-Type': 'application/json',
         },
     }).then(response => response.json())
         .then(result => {
             console.log(result);
             setRoutines(result);
         })
         .catch(console.error);
 };
 
 const fetchUsernameRoutines = (username) => {
    const token = window.localStorage.getItem('token');
     fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`, {
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
       },
     }).then(response => response.json())
       .then(result => {
         console.log(result);
         setMyRoutines(result);
       })
       .catch(console.error);
}
  useEffect(()=> {
    if(user.username) {
      fetchUsernameRoutines(user.username);
    }
  }, [user])

  const loadData = async() => {
    const allActivities = await fetchAllActivities();
    setActivities(allActivities);
    //hoping to add fetchAllRoutines and fetchUsernameRoutines
  }

 useEffect(() => {
   const checkToken = () => {
    const token = window.localStorage.getItem('token');
    if(token) {
      setToken(token);
      fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }).then(response => response.json())
        .then(result => {
          console.log(result);
          setUser(result);
        })
        .catch(console.error);
    }
   };
   checkToken();
   loadData();
   fetchAllRoutines();
   }, [])

  return (
    <div>
      <header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/Activities'>Activities</Link>
          <Link to='/Routines'>Routines</Link>
          <Link to='/MyRoutines'>My Routines</Link>
          <Link to='/Login'>Login</Link>
          <Link to='/Register'>Register</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/Register' element={<ViewRegister />} />
        <Route path='/Login' element={<ViewLogin />} />
        <Route path='/activities/:id' element={
          <SingleActivity activities={activities} />
        } />
        <Route path='/activities' element={
          <AllActivities activities={activities} />
        } />
        <Route path='/routines/:id' element={
            <SingleRoutine routines={routines} />
        } />
        <Route path='/routines' element={
            <AllRoutines routines={routines} />
        } />
        <Route path='/myroutines/:id' element={
            <MyOneRoutine routines={routines} />
        } />
        <Route path='/myroutines' element={
            <AllMyRoutines myRoutines={myRoutines} />
        } />
        <Route path='/' element={
            <Home />
        } />
      </Routes>
    </div>
  );
};




const root = createRoot(document.querySelector('#root'));

root.render(<HashRouter><App /></HashRouter>);
