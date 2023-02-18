import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, HashRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { loginUser } from './api/fetch'; //this is only here right now for getting a token for development
import { getUser, fetchUsernameRoutines, fetchAllActivities, fetchAllRoutines } from './api/fetch'
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
            { user.username ? <><div className='icon'></div>
            <p>Hi {user.username}!</p>
            <button className='logout-btn' onClick={ logout }>Logout</button></>: null}
          </div>
          <div className='login-register'>
            <Link to='/Login'><button className='login-btn'>Login</button></Link>
            <Link to='/Register'><button className='login-btn'>Register</button></Link>
          </div>
        </div>
        <div className='logo-nav'>       
          <div className='logo'>
              <p>Werkit</p>
            </div>
          <nav>
            <Link to='/'>HOME</Link>
            <Link to='/Activities'>ACTIVITIES</Link>
            <Link to='/Routines'>ROUTINES</Link>
            <Link to='/MyRoutines'>MY ROUTINES</Link>

          </nav>
        </div>  

      </header>
      <Routes>
        <Route path='/Register' element={<ViewRegister />} />
        <Route path='/Login' element={<ViewLogin  />} />
        {/* <Route path='/Activity' element={<CreateActivity />} /> */}
        {/* <Route path='/Activity' element={<CreateRoutine />} /> */}
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