import React from 'react';
import { Routes, Route, HashRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { loginUser } from './api/fetch';
import { Navbar } from './nav';

const App = ()=> {
 loginUser("Kristy", "12345678");


 Navbar();

  return (
    <div>
      <header>
        <nav>
          <Link to='/Home'>Home</Link>
          <Link to='/Activities'>Activities</Link>
          <Link to='/Routines'>Routines</Link>
          <Link to='/Login'>Login</Link>
        </nav>
      </header>

      <Route path='/Register' element={<Register />} />

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
