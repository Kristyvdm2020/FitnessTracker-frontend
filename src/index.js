import React, { useState, useEffect } from 'react';
import { Link, NavLink, Routes, Route, HashRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { getUser, fetchUsernameRoutines, fetchAllActivities, fetchAllRoutines } from './api/fetch'
import { ViewRegister } from './components/ViewRegister';
import { ViewLogin } from './components/ViewLogin';
import { CreateActivity } from './components/CreateActivity';
import AllActivities from './components/AllActivities';
import SingleActivity from './components/SingleActivity';
import { CreateRoutine } from './components/CreateRoutine';
import SingleRoutine from './components/SingleRoutine';
import AllRoutines from './components/AllRoutines';
import MyOneRoutine from './components/MyOneRoutine';
import AllMyRoutines from './components/AllMyRoutines';
import Home from './components/Home';

const App = ()=> {

 
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [user, setUser] = useState({});
  const [myRoutines, setMyRoutines] = useState([]);

  const loadUsernameRoutines = async () => {
    const allMyRoutines = await fetchUsernameRoutines(user.username);
    setMyRoutines(allMyRoutines);
  }

  useEffect(() => {
    if (user.username) {
      loadUsernameRoutines();
    }
  }, [user])


  const checkToken = async () => {
    const token = window.localStorage.getItem('token');
    if (token) {
      const user = await getUser(token);
      setUser(user);
    }
  };

  const loadData = async () => {
    const allActivities = await fetchAllActivities();
    setActivities(allActivities);
    const allRoutines = await fetchAllRoutines();
    setRoutines(allRoutines);
  }

  const logout = () => {
    window.localStorage.removeItem('token');
    setUser({});
    setMyRoutines([]);
  }

  useEffect(() => {
    checkToken();
    loadData();
  }, [])

  return (
    <div className='container'>
      <header>

        <div className='top-container'>
          <div className='user-display'>
            { user.username ? <><div className='user'>
              <p>Hi {user.username}!</p></div>
            
            <button className='logout-btn' onClick={ logout }>Logout</button></>: null}
          </div>
          {!user.username ?
            <div className='login-register'>
              <Link to='/Login'><button className='login-btn'>Login</button></Link>
              <Link to='/Register'><button className='login-btn'>Register</button></Link>
            </div>
            : null}
        </div>
        <div className='logo-nav'>       
          <div className='logo'>
              <p>Werkit</p>
            </div>
          <nav>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/Activities'>ACTIVITIES</NavLink>
            <NavLink to='/Routines'>ROUTINES</NavLink>
            <NavLink to='/MyRoutines'>MY ROUTINES</NavLink>

          </nav>
        </div>  

      </header>
      <Routes>
        <Route path='/Register' element={<ViewRegister />} />
        <Route path='/Login' element={<ViewLogin  setUser={setUser}/>} />
        <Route path='/newactivity' element={<CreateActivity setActivities={setActivities}/>} />
        <Route path='/newroutine' element={<CreateRoutine  user={user} myRoutines={myRoutines} setMyRoutines={setMyRoutines} />} />
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
          <MyOneRoutine user={user} myRoutines={myRoutines} activities={activities} setMyRoutines={setMyRoutines} />
        } />
        <Route path='/myroutines' element={
          <AllMyRoutines user={user} myRoutines={myRoutines} setMyRoutines={setMyRoutines} />
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