import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, HashRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { loginUser } from './api/fetch';
import { ViewRegister } from './components/ViewRegister';
import { ViewLogin } from './components/ViewLogin';
import AllActivities from './components/AllActivities';
import SingleActivity from './components/SingleActivity';

const App = ()=> {
 loginUser("Kristy", "12345678");
 const [activities, setActivities] = useState([]);

 const fetchAllActivities = () => {
    fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(result => {
            console.log(result);
            setActivities(result);
        })
        .catch(console.error);
};

useEffect(() => {
    fetchAllActivities();
  }, [])

  return (
    <div>
      <header>
        <nav>
          <Link to='/Home'>Home</Link>
          <Link to='/Activities'>Activities</Link>
          <Link to='/Routines'>Routines</Link>
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
      </Routes>
    </div>
  

  // <div>
  //   <h1>App</h1>
  //   <> 
  //       <Router>
  //       <Navbar />
  //         <Routes>
  //           <Route path='/Home' element={<Home />} />
  //           <Route path='/Activities' element={<Activities />} />
  //           <Route path='/Routines' element={<Routines />} />
  //           <Route path='/Login' element={<Login />} />
  //           
  //         </Routes>
  //       </Router>
  //   </>
  // </div>
// );

  );
};




const root = createRoot(document.querySelector('#root'));

root.render(<HashRouter><App /></HashRouter>);
